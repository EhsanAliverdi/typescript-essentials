/*
Scenario: Clean Architecture in TypeScript

Real-world problem:
As applications grow, business logic gets scattered across controllers,
database calls, and UI code. Testing becomes impossible without a real
database, and changing frameworks means rewriting the entire app.

Goal: Organise code into three clear layers using Clean Architecture:
  - Domain     pure business logic, no dependencies
  - Application (Use Cases)  orchestrates domain logic
  - Infrastructure  database, HTTP, external services

Each outer layer depends inward  never the reverse.
*/

// 
// LAYER 1: DOMAIN  pure TypeScript, no imports, no frameworks
// 

interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
}

interface Order {
  id: string;
  customerId: string;
  items: Array<{ productId: string; quantity: number; unitPrice: number }>;
  status: "pending" | "confirmed" | "cancelled";
  total: number;
}

// Domain business rule: an order cannot be placed with zero items
function createOrder(customerId: string, items: Order["items"]): Order {
  if (items.length === 0) throw new Error("An order must have at least one item");
  const total = items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
  return {
    id: crypto.randomUUID(),
    customerId,
    items,
    status: "pending",
    total,
  };
}

// 
// LAYER 2: APPLICATION  use cases / services (orchestration)
// Depends only on Domain and Repository interfaces (not implementations)
// 

// Repository interfaces  defined here, implemented in Infrastructure
interface OrderRepository {
  save(order: Order): Promise<void>;
  findById(id: string): Promise<Order | null>;
  findByCustomer(customerId: string): Promise<Order[]>;
}

interface ProductRepository {
  findById(id: string): Promise<Product | null>;
  decrementStock(productId: string, quantity: number): Promise<void>;
}

// Use Case: Place a new order
interface PlaceOrderCommand {
  customerId: string;
  items: Array<{ productId: string; quantity: number }>;
}

class PlaceOrderUseCase {
  constructor(
    private readonly orders: OrderRepository,
    private readonly products: ProductRepository
  ) {}

  async execute(command: PlaceOrderCommand): Promise<Order> {
    // Enrich items with current prices and validate stock
    const enrichedItems: Order["items"] = [];

    for (const item of command.items) {
      const product = await this.products.findById(item.productId);
      if (!product) throw new Error(`Product not found: ${item.productId}`);
      if (product.stock < item.quantity) {
        throw new Error(`Insufficient stock for "${product.name}"`);
      }
      enrichedItems.push({ productId: item.productId, quantity: item.quantity, unitPrice: product.price });
    }

    // Create domain object (business rule enforced here)
    const order = createOrder(command.customerId, enrichedItems);

    // Persist and adjust stock
    await this.orders.save(order);
    for (const item of order.items) {
      await this.products.decrementStock(item.productId, item.quantity);
    }

    return order;
  }
}

// 
// LAYER 3: INFRASTRUCTURE  implementations (in-memory for this demo)
// In production this would be Postgres, MongoDB, Redis, etc.
// 

class InMemoryOrderRepository implements OrderRepository {
  private store: Map<string, Order> = new Map();

  async save(order: Order): Promise<void> {
    this.store.set(order.id, order);
  }

  async findById(id: string): Promise<Order | null> {
    return this.store.get(id) ?? null;
  }

  async findByCustomer(customerId: string): Promise<Order[]> {
    return [...this.store.values()].filter((o) => o.customerId === customerId);
  }
}

class InMemoryProductRepository implements ProductRepository {
  private products: Map<string, Product> = new Map([
    ["p1", { id: "p1", name: "TypeScript Handbook", price: 29.99, stock: 10 }],
    ["p2", { id: "p2", name: "Clean Code", price: 34.99, stock: 5 }],
  ]);

  async findById(id: string): Promise<Product | null> {
    return this.products.get(id) ?? null;
  }

  async decrementStock(productId: string, quantity: number): Promise<void> {
    const product = this.products.get(productId);
    if (product) {
      this.products.set(productId, { ...product, stock: product.stock - quantity });
    }
  }
}

// 
// COMPOSITION ROOT  wire everything together (e.g., in main.ts)
// 
async function main(): Promise<void> {
  const orderRepo = new InMemoryOrderRepository();
  const productRepo = new InMemoryProductRepository();
  const placeOrder = new PlaceOrderUseCase(orderRepo, productRepo);

  // Normal flow
  const order = await placeOrder.execute({
    customerId: "customer-123",
    items: [
      { productId: "p1", quantity: 2 },
      { productId: "p2", quantity: 1 },
    ],
  });

  console.log("Order placed:", order.id);
  console.log("Total: $" + order.total.toFixed(2));
  console.log("Items:", order.items.length);

  // Error: insufficient stock
  try {
    await placeOrder.execute({
      customerId: "customer-123",
      items: [{ productId: "p2", quantity: 100 }],
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log("Expected error:", err.message);
    }
  }
}

main();

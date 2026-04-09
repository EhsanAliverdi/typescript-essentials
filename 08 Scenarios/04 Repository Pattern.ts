/*
Scenario: Repository Pattern

Real-world problem:
Business logic should not depend directly on database drivers or fetch calls.
When logic is tangled with data access, testing is hard and switching databases
is painful.

Goal: Use the Repository pattern to hide data access behind an interface 
the business layer depends on the interface, not the implementation.
*/

//  DOMAIN MODEL 
interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

//  REPOSITORY INTERFACE 
// This is the contract  business logic only knows about this.
interface ProductRepository {
  findById(id: number): Promise<Product | null>;
  findAll(): Promise<Product[]>;
  findByName(name: string): Promise<Product[]>;
  save(product: Omit<Product, "id">): Promise<Product>;
  update(id: number, updates: Partial<Omit<Product, "id">>): Promise<Product | null>;
  delete(id: number): Promise<boolean>;
}

//  IN-MEMORY IMPLEMENTATION (for testing / dev) 
class InMemoryProductRepository implements ProductRepository {
  private products: Product[] = [
    { id: 1, name: "TypeScript Handbook", price: 29.99, stock: 50 },
    { id: 2, name: "Node.js Cookbook", price: 39.99, stock: 30 },
    { id: 3, name: "Clean Code", price: 34.99, stock: 15 },
  ];
  private nextId = 4;

  async findById(id: number): Promise<Product | null> {
    return this.products.find((p) => p.id === id) ?? null;
  }

  async findAll(): Promise<Product[]> {
    return [...this.products];
  }

  async findByName(name: string): Promise<Product[]> {
    const lower = name.toLowerCase();
    return this.products.filter((p) => p.name.toLowerCase().includes(lower));
  }

  async save(product: Omit<Product, "id">): Promise<Product> {
    const newProduct: Product = { id: this.nextId++, ...product };
    this.products.push(newProduct);
    return newProduct;
  }

  async update(id: number, updates: Partial<Omit<Product, "id">>): Promise<Product | null> {
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) return null;
    this.products[index] = { ...this.products[index], ...updates };
    return this.products[index];
  }

  async delete(id: number): Promise<boolean> {
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) return false;
    this.products.splice(index, 1);
    return true;
  }
}

//  SERVICE (Business Logic Layer) 
// The service depends on the INTERFACE  not the implementation.
class ProductService {
  constructor(private readonly repo: ProductRepository) {}

  async getProductDetails(id: number): Promise<string> {
    const product = await this.repo.findById(id);
    if (!product) return `Product #${id} not found`;
    return `${product.name} - $${product.price} (${product.stock} in stock)`;
  }

  async addProduct(name: string, price: number, stock: number): Promise<Product> {
    if (price <= 0) throw new Error("Price must be positive");
    if (stock < 0) throw new Error("Stock cannot be negative");
    return this.repo.save({ name, price, stock });
  }

  async applyDiscount(id: number, percent: number): Promise<Product | null> {
    const product = await this.repo.findById(id);
    if (!product) return null;
    const newPrice = parseFloat((product.price * (1 - percent / 100)).toFixed(2));
    return this.repo.update(id, { price: newPrice });
  }
}

//  USAGE 
async function main(): Promise<void> {
  const repo = new InMemoryProductRepository();   // swap with DB impl in production
  const service = new ProductService(repo);

  console.log(await service.getProductDetails(1));
  console.log(await service.getProductDetails(99));

  const newProduct = await service.addProduct("Pragmatic Programmer", 44.99, 20);
  console.log("Added:", newProduct);

  const discounted = await service.applyDiscount(1, 10);
  console.log("After 10% discount:", discounted);

  const all = await repo.findAll();
  console.log("All products:", all.length);
}

main();

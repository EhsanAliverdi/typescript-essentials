/*
Scenario: Event-Driven Architecture

Real-world problem:
Components in a large app need to react to changes in other parts of the app
without being tightly coupled. Direct function calls create dependencies that
make the code hard to change and test.

Goal: Build a typed event emitter / pub-sub system so components communicate
through events without knowing about each other.
*/

//  TYPED EVENT MAP 
// Define all application events and their payload types in one map.
interface AppEvents {
  "user:created": { id: number; name: string; email: string };
  "user:deleted": { id: number };
  "order:placed": { orderId: string; userId: number; total: number };
  "order:cancelled": { orderId: string; reason: string };
  "stock:low": { productId: number; currentStock: number; threshold: number };
}

type EventKey = keyof AppEvents;
type EventHandler<K extends EventKey> = (payload: AppEvents[K]) => void;

//  TYPED EVENT EMITTER 
class TypedEventEmitter {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private listeners: Map<EventKey, Set<EventHandler<any>>> = new Map();

  on<K extends EventKey>(event: K, handler: EventHandler<K>): () => void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event)!.add(handler);

    // Return an unsubscribe function
    return () => this.off(event, handler);
  }

  off<K extends EventKey>(event: K, handler: EventHandler<K>): void {
    this.listeners.get(event)?.delete(handler);
  }

  emit<K extends EventKey>(event: K, payload: AppEvents[K]): void {
    this.listeners.get(event)?.forEach((handler) => handler(payload));
  }

  once<K extends EventKey>(event: K, handler: EventHandler<K>): void {
    const wrapper: EventHandler<K> = (payload) => {
      handler(payload);
      this.off(event, wrapper);
    };
    this.on(event, wrapper);
  }
}

//  APPLICATION SETUP 
const events = new TypedEventEmitter();

//  EMAIL SERVICE reacts to user events 
events.on("user:created", (payload) => {
  // payload is fully typed: { id, name, email }
  console.log(`[EmailService] Sending welcome email to ${payload.email}`);
});

//  ANALYTICS SERVICE reacts to orders 
events.on("order:placed", (payload) => {
  console.log(`[Analytics] Order ${payload.orderId} placed  total: $${payload.total}`);
});

events.on("order:cancelled", (payload) => {
  console.log(`[Analytics] Order ${payload.orderId} cancelled: ${payload.reason}`);
});

//  INVENTORY SERVICE reacts to stock alerts 
const unsubscribeLowStock = events.on("stock:low", (payload) => {
  console.log(
    `[Inventory] Product ${payload.productId} is low: ${payload.currentStock}/${payload.threshold}`
  );
});

//  EMIT EVENTS (simulating app actions) 
events.emit("user:created", { id: 1, name: "Alice", email: "alice@example.com" });

events.emit("order:placed", { orderId: "ORD-001", userId: 1, total: 149.99 });

events.emit("stock:low", { productId: 42, currentStock: 3, threshold: 10 });

events.emit("order:cancelled", { orderId: "ORD-001", reason: "Customer request" });

// Unsubscribe from stock:low after first alert
unsubscribeLowStock();
events.emit("stock:low", { productId: 42, currentStock: 2, threshold: 10 });
// ^ This won't print  handler was removed

//  ONCE SUBSCRIBER 
events.once("user:created", (payload) => {
  console.log(`[Audit] First-time handler for user: ${payload.name}`);
});

events.emit("user:created", { id: 2, name: "Bob", email: "bob@example.com" });
events.emit("user:created", { id: 3, name: "Carol", email: "carol@example.com" });
// The once handler only fires for Bob  not Carol

/*
In this section we will learn how to apply clean architecture in TypeScript.

We will learn:
- separating code into domain, application, and infrastructure layers
- the dependency rule: outer layers depend on inner, never the reverse
- using interfaces to decouple layers
- why this makes code testable, scalable, and maintainable
*/

//  DOMAIN LAYER (pure business logic  no imports from outer layers) 
interface User {
  id: number;
  name: string;
  email: string;
}

interface UserRepository {
  findById(id: number): Promise<User | null>;
  save(user: User): Promise<void>;
}

//  APPLICATION LAYER (orchestrates use cases) 
class GetUserUseCase {
  constructor(private readonly userRepo: UserRepository) {}

  async execute(id: number): Promise<User> {
    const user = await this.userRepo.findById(id);
    if (!user) throw new Error(`User ${id} not found`);
    return user;
  }
}

//  INFRASTRUCTURE LAYER (implements interfaces  can use DBs, APIs) 
class InMemoryUserRepository implements UserRepository {
  private store: Map<number, User> = new Map([
    [1, { id: 1, name: "Ehsan", email: "e@test.com" }],
  ]);

  async findById(id: number): Promise<User | null> {
    return this.store.get(id) ?? null;
  }

  async save(user: User): Promise<void> {
    this.store.set(user.id, user);
  }
}

//  COMPOSITION ROOT (wire everything together) 
const userRepo = new InMemoryUserRepository();
const getUser = new GetUserUseCase(userRepo);

// Use case depends on interface, not on concrete class
//  swap InMemoryUserRepository for a real DB without changing use case

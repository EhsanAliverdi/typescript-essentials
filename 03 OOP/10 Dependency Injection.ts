/*
In this section we will learn dependency injection (DI).

We will learn:
- what DI is
- why it improves flexibility
- how to implement it

What we are doing:
We are decoupling classes from concrete implementations.
*/

// Interface (abstraction)
interface Logger {
  log(message: string): void;
}

// Implementation
class ConsoleLogger implements Logger {
  log(message: string) {
    console.log(message);
  }
}

// Service using DI
class UserService {
  constructor(private logger: Logger) {}

  createUser(name: string) {
    this.logger.log(`User created: ${name}`);
  }
}

// Inject dependency
const logger = new ConsoleLogger();
const service = new UserService(logger);

service.createUser("Ehsan");

/*
Why DI?
- easier testing
- replace implementations easily
*/
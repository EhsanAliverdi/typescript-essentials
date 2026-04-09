/*
In this section we will learn how classes implement interfaces.

We will learn:
- enforcing contracts
*/

// interface defines a contract for classes to implement
// it specifies the structure that a class must follow

interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(message);
  }
}


const ourConsoleLogger: Logger = new ConsoleLogger();
ourConsoleLogger.log("Hello, TypeScript!");
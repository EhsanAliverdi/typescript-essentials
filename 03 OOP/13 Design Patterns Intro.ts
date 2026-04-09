/*
In this section we will learn basic design patterns.

We will learn:
- common reusable solutions
- when to use them

What we are doing:
We are applying proven patterns to real problems.
*/

// Singleton
class Config {
  private static instance: Config;

  private constructor() {}

  static getInstance() {
    if (!Config.instance) {
      Config.instance = new Config();
    }
    return Config.instance;
  }
}

const c1 = Config.getInstance();
const c2 = Config.getInstance();

console.log(c1 === c2); // true

// Factory
// In factory pattern we create a function that returns an object based on some input
function createUser(name: string) {
  return { name };
}

// Strategy
//In strategy pattern we define a family of algorithms, encapsulate each one, and make them interchangeable
interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
  pay(amount: number) {
    console.log(`Paid ${amount} with credit card`);
  }
}

/*
Common patterns:
- Singleton
- Factory
- Strategy
- Observer
*/
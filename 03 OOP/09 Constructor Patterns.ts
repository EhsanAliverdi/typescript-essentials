/*
In this section we will learn constructor patterns.

We will learn:
- parameter properties
- simplifying constructors
- best practices

What we are doing:
We are improving how we initialize objects cleanly.
*/

// Traditional constructor
class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

// Shorter version (parameter properties)
class Product2 {
  constructor(public name: string, public price: number) {}
}

const p = new Product2("Laptop", 1000);

/*
Best practice:
- keep constructors simple
- avoid heavy logic inside constructor
*/
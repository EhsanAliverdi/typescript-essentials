/*
In this section we will learn class basics.

We will learn:
- properties
- methods
*/

// A class is a blueprint for creating objects. It encapsulates data and behavior related to that data.
// In TypeScript, we can define classes with properties and methods.

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }

  getName(): string {
    return this.name;
  }
}

const p = new Person("Ehsan");
p.greet();
console.log(p.getName());


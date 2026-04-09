/*
In this section we will learn factory functions.

We will learn:
- creating objects using functions
- comparing with classes
- when to use factories

What we are doing:
We are building reusable object creators.
*/

// Factory function
function createUser(name: string, age: number) {
  return {
    name,
    age,
    greet() {
      console.log(`Hello ${name}`);
    }
  };
}

const user1 = createUser("Ehsan", 30);
user1.greet();

// Advantage: no "new", flexible
// vs class
class User {
  constructor(public name: string, public age: number) {}

  greet() {
    console.log(`Hello ${this.name}`);
  }
}
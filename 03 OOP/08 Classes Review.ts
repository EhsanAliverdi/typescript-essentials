/*
In this section we will review classes in TypeScript.

We will learn:
- class structure
- properties and methods
- how classes map to JavaScript

What we are doing:
We are revisiting class basics and understanding how they behave under the hood.
*/

class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

const user = new User("Ehsan");
user.greet();

/*
Behind the scenes:
- Classes are just syntactic sugar over JavaScript prototypes
*/
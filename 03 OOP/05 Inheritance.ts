/*
In this section we will learn inheritance.

We will learn:
- extending classes
- reusing logic
*/
//Inheritance allows us to create a new class that is based on an existing class.
//The new class, called a subclass, inherits properties and methods from the existing class, called a superclass.

class Animal {
  constructor(public name: string) {}

  speak() {
    console.log(`${this.name} makes a noise`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Rex");
dog.speak();
dog.bark();
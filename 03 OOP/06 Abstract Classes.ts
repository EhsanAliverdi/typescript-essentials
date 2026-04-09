/*
In this section we will learn abstract classes.

We will learn:
- defining base classes
- forcing implementation
*/

// Abstract class cannot be instantiated directly
// It serves as a blueprint for other classes
// It can contain both implemented and abstract methods

abstract class Shape {
  abstract getArea(): number;

  print() {
    console.log("Calculating area...");
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super(); // Call the constructor of the base class
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
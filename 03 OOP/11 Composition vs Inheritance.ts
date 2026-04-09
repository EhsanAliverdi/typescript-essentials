/*
In this section we will compare composition vs inheritance.

We will learn:
- problems with inheritance
- benefits of composition

What we are doing:
We are designing flexible systems.
*/

// Inheritance (tight coupling)
class Animal {
  move() {
    console.log("Moving");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Barking");
  }
}

// Composition (flexible)
function canMove() {
  return {
    move: () => console.log("Moving")
  };
}

function canBark() {
  return {
    bark: () => console.log("Barking")
  };
}

function createDog() {
  return {
    ...canMove(),
    ...canBark()
  };
}

const dog = createDog();
dog.move();
dog.bark();

/*
Key idea:
- Prefer composition over inheritance
*/
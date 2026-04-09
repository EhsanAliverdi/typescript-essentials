/*
In this section we will learn the 'this' keyword.

We will learn:
- how 'this' behaves
- difference in arrow functions
- common pitfalls

What we are doing:
We are understanding how context works in JavaScript.
*/

const user = {
  name: "Ehsan",
  greet() {
    console.log(this.name);
  }
};

user.greet(); // "Ehsan"

// Problem with regular function
const obj = {
  name: "Ali",
  greet: function () {
    setTimeout(function () {
    //   console.log(this.name); // undefined ❌
    }, 1000);
  }
};

// Fix with arrow function
const fixedObj = {
  name: "Ali",
  greet() {
    setTimeout(() => {
      console.log(this.name); // "Ali" ✅
    }, 1000);
  }
};
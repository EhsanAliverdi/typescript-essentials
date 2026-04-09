/*
In this section we will deeply understand how functions work in TypeScript and JavaScript.

We will learn:
- function declarations vs expressions
- arrow functions
- return types and inference
- how TypeScript enforces function contracts

What we are doing:
We are exploring how functions behave and how TypeScript helps make them safer and clearer.
*/

// Function declaration
function add(a: number, b: number): number {
  return a + b;
}

// Function expression
const subtract = function (a: number, b: number): number {
  return a - b;
};

// Arrow function
const multiply = (a: number, b: number): number => a * b;

// Type inference
const divide = (a: number, b: number) => a / b;

// Function returning object
function createUser(name: string) {
  return { name };
}

const user = createUser("Ehsan");
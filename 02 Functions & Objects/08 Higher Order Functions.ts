/*
In this section we will learn higher-order functions.

We will learn:
- functions that take/return functions
- common array methods
- real-world patterns

What we are doing:
We are writing functions that operate on other functions.
*/

// Takes function as argument
function applyOperation(a: number, b: number, op: (x: number, y: number) => number) {
  return op(a, b);
}

const sum = applyOperation(2, 3, (x, y) => x + y);

// Returns a function
function multiplier(factor: number) {
  return (value: number) => value * factor;
}

const double = multiplier(2);
console.log(double(5)); // 10

// Real-world (array)
const numbers = [1, 2, 3];
const doubled = numbers.map((n) => n * 2);
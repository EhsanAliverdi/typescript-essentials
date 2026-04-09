/*
In this section we will learn how functions themselves can have types.

We will learn:
- defining function signatures
- assigning functions to variables
*/

// Function type
let add: (a: number, b: number) => number;

add = (x, y) => x + y;

let sum: (...args: number[]) => number;

sum = (...args) => args.reduce((acc, val) => acc + val, 0);

console.log(add(5, 10)); // 15
console.log(sum(1, 2, 3, 4)); // 10

// Reusable type
type MathOperation = (a: number, b: number) => number;

const multiply: MathOperation = (a, b) => a * b;

type numberArrayOperation = (...args: number[]) => number;

const average: numberArrayOperation = (...args) => {
  const total = args.reduce((acc, val) => acc + val, 0);
  return total / args.length;
};

// Callback typing
function process(fn: (value: number) => number) {
  return fn(10);
}

console.log(process((x) => x * 2)); // 20

// Best practice:
// - use function types for callbacks and higher-order functions
// - define reusable function types with type aliases for clarity
/*
In this section we will learn how TypeScript infers types automatically.

We will learn:
- implicit typing
- when to annotate manually
*/

// Type inferred as number
let count = 10;

// inferred as string
let message = "Hello";

// function inference
function add(a: number, b: number) {
  return a + b; // inferred as number
}

// Best practice:
// - rely on inference when obvious
// - use explicit types for clarity in complex cases
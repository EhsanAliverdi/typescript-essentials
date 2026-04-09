/*
In this section we will learn type assertions.

We will learn:
- how to tell TypeScript about a type
- when to use assertions safely
*/
// Type assertions are a way to tell TypeScript about the type of a value when we know more than the compiler does.
let value: unknown = "Hello";

// Method 1
let strLength = (value as string).length;

// Method 2 (JSX incompatible)
let strLength2 = (<string>value).length;

// Common use case (DOM)
const input = document.getElementById("myInput") as HTMLInputElement;
input.value = "Hello";

// ⚠️ Warning:
// Assertions do NOT change runtime behavior
/*
In this section we will learn how to declare variables in TypeScript.

We will learn:
- let vs const
- type annotations
- best practices
*/

// let → value can change
let age: number = 30;
age = 31;

// const → value cannot change
const name: string = "Ehsan";

// TypeScript infers type automatically
let city = "Sydney"; // string

// ❌ Error: Type mismatch
// age = "thirty";

// Best practice:
// - use const by default
// - use let only when needed

const isActive: boolean = true;
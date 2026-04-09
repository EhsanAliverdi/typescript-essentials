/*
In this section we will learn how to work with arrays in TypeScript.

We will learn:
- typed arrays
- different syntax styles
*/

// Method 1
let numbers: number[] = [1, 2, 3];

// Method 2 (generic style)
let names: Array<string> = ["Ali", "Sara"];

// Mixed types (not recommended usually)
let mixed: (string | number)[] = ["hello", 10];

// Type safety
// numbers.push("text"); ❌ Error

numbers.push(4); // ✅

// Readonly array
const readonlyNumbers: readonly number[] = [1, 2, 3];
// readonlyNumbers.push(4); ❌
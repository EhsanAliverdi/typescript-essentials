/*
In this section we will learn function overloading.

We will learn:
- defining multiple function signatures
- how TypeScript resolves overloads
- when to use overloads vs unions

What we are doing:
We are creating functions that behave differently based on input types.
*/

// Overload signatures
function format(value: string): string;
function format(value: number): string;

// Implementation
function format(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}

// Usage
format("hello"); // "HELLO"
format(10);      // "10.00"
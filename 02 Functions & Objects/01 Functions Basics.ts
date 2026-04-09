/*
In this section we will learn how to define functions in TypeScript.

We will learn:
- parameter types
- return types
*/

// Function with types
function greet(name: string): string {
  return `Hello ${name}`;
}

// Arrow function
const add = (a: number, b: number): number => {
  return a + b;
};

// Void return
function logMessage(message: string): void {
  console.log(message);
}

// Function with object
function printUser(user: { name: string; age: number }): void {
  console.log(user.name);
}

console.log(greet("Alice"));
console.log(add(5, 10));
logMessage("This is a message");
printUser({ name: "Bob", age: 30 });

// Best practice:
// - always type parameters and return values for clarity
// - use void for functions that don't return anything
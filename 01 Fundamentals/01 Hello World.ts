/*
In this file, we will learn the basics of TypeScript and how to write a simple "Hello World" program.
TypeScript is a statically typed superset of JavaScript 
that adds optional types, classes, and interfaces. It compiles down to plain JavaScript, 
which can run in any browser or JavaScript environment.
*/
// To run this code, you will need to have TypeScript installed. You can install it globally using npm:
// npm install -g typescript
// you need node.js and npm installed on your machine to use TypeScript. You can download them from the official Node.js website: https://nodejs.org/


// This is a simple "Hello World" program in TypeScript
function greet(name: string): string {
    return `Hello, ${name}!`;
}

// Example usage
console.log(greet("TypeScript!"));

//strictly typed variable means we have to declare the type of variable before using it
let message: string = "Welcome to TypeScript!";
console.log(message);
// If we try to assign a value of a different type, TypeScript will give us an error
// message = 42; // This will cause a TypeScript error because 42 is not a string

// with typescript there is always compilation step, we need to compile our TypeScript code to JavaScript before running it
// we can do this using the command line with the tsc command
// tsc 01_Hello_World.ts
// This will generate a 01_Hello_World.js file that we can run in a JavaScript environment
// all browsers and JavaScript environments can run the generated JavaScript code, so we can use TypeScript to write modern JavaScript features while still maintaining compatibility with older environments.
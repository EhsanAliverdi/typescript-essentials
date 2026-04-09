/*
In this section we will learn declaration files.

We will learn:
- .d.ts files
- typing external libraries
*/
//declaration files are used to provide type information about JavaScript code, 
// especially when using external libraries that may not have built-in TypeScript support.
// They allow us to define the types of functions, variables, and other entities in a way 
// that TypeScript can understand, enabling better type checking and autocompletion in our code.


// example.d.ts
declare function greet(name: string): void;

// usage
greet("Ehsan");
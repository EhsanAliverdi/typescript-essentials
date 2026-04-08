/*
In this section, we will learn how to compile TypeScript code into JavaScript.
 TypeScript is a statically typed superset of JavaScript that needs to be compiled before it can be executed in a JavaScript environment. The TypeScript compiler (tsc) takes care of this process, converting your TypeScript code into plain JavaScript that can run in any browser or JavaScript environment.
*/

/* To compile a TypeScript file, you can use the command line. First, make sure you have TypeScript installed globally using npm:
 npm install -g typescript
 Once you have TypeScript installed, 
 you can compile your TypeScript file 
 using the tsc command followed by the name of your TypeScript file. For example:
 tsc 02_Compiling_Typescript.ts
 This command will generate a JavaScript file with the same name 
 but with a .js extension (e.g., 02_Compiling_Typescript.js)
*/

// Example TypeScript code to compile
let add =(a: number, b:number):number => a + b;

console.log(add(5, 10)); // This will output 15 in the generated JavaScript file
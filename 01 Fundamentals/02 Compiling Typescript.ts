/*
In this section we will learn how TypeScript is compiled into JavaScript.

We will learn:
- why TypeScript needs compilation
- how to use the TypeScript compiler (tsc)
- what happens during compilation
*/

/*
Step 1: Install TypeScript
npm install -g typescript

Step 2: Compile file
tsc 01 Hello World.ts

Step 3: Run output (JavaScript)
node 01 Hello World.js
*/

// Example TypeScript
let value: number = 10;

// After compilation -> JavaScript:
// var value = 10;

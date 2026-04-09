/*
In this section we will learn modules.

We will learn:
- exporting and importing
*/

// The add function is defined in math.ts (same folder) and exported from there.
// With "module": "nodenext", imports must use the .js extension.
// Note: In a real project, you would typically have a build step that compiles TypeScript to JavaScript,
// and the .js extension would be necessary for the runtime to find the correct file.
// In this example, we are importing the add function from math.ts and using it to add two numbers.

//import { add } from "./math.js";

//console.log(add(2, 3)); // 5    
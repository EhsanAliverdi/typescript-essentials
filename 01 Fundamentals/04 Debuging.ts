/*
In this section, we will learn how to debug TypeScript code effectively. Debugging is an essential skill for any developer, and TypeScript provides various tools and techniques to help you identify and fix issues in your code.
*/

// you can go to tsconfig.json file and set the "sourceMap" option to true to generate source maps for your TypeScript code.
// This will allow you to debug your TypeScript code directly in the browser or in a Node.js environment using tools like Chrome DevTools or Visual Studio Code.

// Example TypeScript code with a bug
function divide(a: number, b: number): number {
    return a / b;
}

console.log(divide(10, 0)); // This will output Infinity, which is not the expected result

// To debug this code, you can set a breakpoint in your TypeScript file and step through the code to see where the issue occurs. You can also inspect the values of variables and the call stack to understand why the division by zero is happening and how to handle it properly.
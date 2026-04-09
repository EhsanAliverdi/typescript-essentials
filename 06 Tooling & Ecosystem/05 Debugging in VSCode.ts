/*
In this section we will learn how to debug TypeScript in VS Code.

We will learn:
- what the VS Code debugger is
- how source maps link compiled JS back to TypeScript source
- how to set breakpoints and inspect variables
- how launch.json works
- how to configure the debugger for this project

What we are doing:
Setting up the VS Code debugger so we can pause execution, inspect
variables, and step through TypeScript code line by line.
*/

//  HOW IT WORKS 
// 1. TypeScript compiles: .ts  .js (in dist/)
// 2. Source maps (.js.map) link each compiled line back to the .ts file
// 3. VS Code uses the source map to display breakpoints on the .ts file
// 4. When a breakpoint is hit, you see the TypeScript source  not the JS

//  tsconfig.json settings needed 
/*
{
  "compilerOptions": {
    "sourceMap": true,   // generates .js.map files
    "outDir": "./dist"
  }
}
*/

//  .vscode/launch.json 
/*
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug current file",
      "preLaunchTask": "tsc: build - tsconfig.json",
      "program": "${workspaceFolder}/dist/${relativeFileDirname}/${fileBasenameNoExtension}.js",
      "outFiles": ["${workspaceFolder}/dist/**/*.js"],
      "sourceMaps": true,
      "console": "integratedTerminal"
    }
  ]
}
*/

//  STEP BY STEP: DEBUGGING 
// 1. Open a .ts file you want to debug
// 2. Click the gutter (left of line numbers) to set a breakpoint (red dot)
// 3. Press F5 to start debugging
// 4. VS Code builds the project first (preLaunchTask)
// 5. Execution pauses at the breakpoint
// 6. Use the Debug toolbar to:
//    F10  Step Over (go to next line)
//    F11  Step Into (enter a function)
//    F5   Continue (run to next breakpoint)
// 7. Hover over variables to inspect their values
// 8. Use the VARIABLES panel on the left to see all in-scope values

//  EXAMPLE TO DEBUG 
function calculateTotal(prices: number[], taxRate: number): number {
  const subtotal = prices.reduce((sum, price) => sum + price, 0); // set breakpoint here
  const tax = subtotal * taxRate;
  return subtotal + tax;
}

const prices = [10, 20, 30];
const total = calculateTotal(prices, 0.1);
console.log("Total:", total); // 66

//  USEFUL TIPS 
// - Use console.log() for quick checks
// - Use the debugger for complex logic  see every variable at every step
// - The DEBUG CONSOLE tab lets you run expressions while paused
// - Conditional breakpoints: right-click a breakpoint  "Edit Breakpoint"

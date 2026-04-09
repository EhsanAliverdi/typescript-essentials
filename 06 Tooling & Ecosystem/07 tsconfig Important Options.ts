/*
In this section we will learn the most important TypeScript compiler options.

We will learn:
- what tsconfig.json controls
- the most important compiler options explained clearly
- strict mode and what it enables
- module resolution strategies
- a recommended starter configuration

What we are doing:
Understanding tsconfig.json so we can configure TypeScript correctly
for different project types (Node.js, browser, library, etc.)
*/

//  WHAT IS tsconfig.json? 
// It tells the TypeScript compiler HOW to compile your project.
// Run: tsc --init   to generate one with defaults and comments.

//  MOST IMPORTANT OPTIONS 

/*
{
  "compilerOptions": {

    //  OUTPUT 
    "target": "ES2022",       // what JS version to compile to
    "outDir": "./dist",       // where to put compiled .js files
    "rootDir": "./src",       // where your .ts source files are

    //  MODULES 
    "module": "commonjs",          // use require() / module.exports  (Node.js)
    // "module": "nodenext",       // use import/export with .js ext  (modern Node)
    // "module": "esnext",         // use import/export               (browser/Vite)
    "moduleResolution": "node",    // how to resolve imports

    //  STRICT MODE 
    "strict": true,           // enables all strict checks below:
    //   strictNullChecks       null/undefined not assignable to other types
    //   strictFunctionTypes    stricter function parameter checking
    //   noImplicitAny          error on implicit any type
    //   noImplicitThis         error on implicit this type

    //  QUALITY 
    "noUnusedLocals": true,        // error on unused local variables
    "noUnusedParameters": true,    // error on unused function parameters
    "noImplicitReturns": true,     // all code paths must return a value
    "noFallthroughCasesInSwitch": true, // no accidental switch fallthrough

    //  SOURCE MAPS 
    "sourceMap": true,        // generate .js.map files for debugging

    //  INTEROP 
    "esModuleInterop": true,  // allows: import React from "react"
    "resolveJsonModule": true // allows: import data from "./data.json"
  },

  "include": ["src/**/*"],   // which files to compile
  "exclude": ["node_modules", "dist"]
}
*/

//  target VALUES 
// "ES5"      supports very old browsers (IE11)
// "ES2017"   async/await support
// "ES2022"   modern features (class fields, top-level await)
// "ESNext"   always latest  use when bundler handles compatibility

//  module VALUES 
// "commonjs"   Node.js classic:  const x = require("./x")
// "nodenext"   Node.js ESM:      import x from "./x.js"
// "esnext"     Browser ESM:      import x from "./x"

//  RULE OF THUMB 
// Node.js API server   target: ES2022, module: commonjs
// Modern Node.js ESM   target: ES2022, module: nodenext
// React/Vite app       Let Vite handle it (minimal tsconfig needed)
// Library              target: ES2020, module: esnext + declaration: true

export {};

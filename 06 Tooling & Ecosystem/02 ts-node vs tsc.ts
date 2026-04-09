/*
In this section we will learn the difference between ts-node and tsc.

We will learn:
- what tsc does (TypeScript compiler)
- what ts-node does (run TypeScript directly)
- when to use each
- development vs production workflow

What we are doing:
Understanding when to compile first and when to run TypeScript directly 
so we choose the right tool for each situation.
*/

//  tsc (TypeScript Compiler) 
// Compiles .ts files to .js files.
// Used for PRODUCTION builds.

// tsc                   compile entire project using tsconfig.json
// tsc --watch           recompile on every file change
// node dist/index.js    run the compiled output

//  ts-node 
// Runs TypeScript directly without a build step.
// Used for DEVELOPMENT and scripts.

// ts-node src/index.ts  compile in memory + run immediately

//  ts-node-dev 
// Like ts-node but restarts on file changes.
// Used for live-reload development servers.

// ts-node-dev --respawn src/index.ts

//  COMPARISON TABLE 
/*
| Feature           | tsc              | ts-node         | ts-node-dev     |
|-------------------|------------------|-----------------|-----------------|
| Produces .js      | Yes              | No (in memory)  | No (in memory)  |
| Build step needed | Yes              | No              | No              |
| Use case          | Production build | Dev / scripts   | Dev server      |
| Speed             | Fast             | Slower startup  | Fast (cached)   |
*/

//  package.json example 
/*
"scripts": {
  "build": "tsc",
  "start": "node dist/index.js",
  "dev": "ts-node-dev --respawn src/index.ts"
}
*/

//  RULE OF THUMB 
// Development  ts-node or ts-node-dev
// CI / Production  tsc, then run compiled JS

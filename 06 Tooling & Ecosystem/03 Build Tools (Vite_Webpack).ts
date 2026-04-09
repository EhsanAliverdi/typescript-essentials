/*
In this section we will learn about build tools for TypeScript projects.

We will learn:
- what a bundler does and why you need one
- the difference between Vite and Webpack
- when to use each tool
- how TypeScript integrates with bundlers

What we are doing:
Understanding the build tools used in real frontend and full-stack projects
so we can set up and work with them confidently.
*/

//  WHAT DOES A BUNDLER DO? 
// 1. Combines many .ts / .js / .css files into a small bundle
// 2. Tree-shakes  removes unused code
// 3. Optimizes for production (minification, code splitting)
// 4. Handles imports, assets, environment variables

//  VITE 
// Modern build tool  extremely fast.
// Uses native ES modules in development (no bundling).
// Uses Rollup for production builds.
// First-class TypeScript support  no extra config needed.
// Best for: React, Vue, Svelte, and modern frontend projects.

// Create a new Vite + TypeScript project:
// npm create vite@latest my-app -- --template vanilla-ts

//  WEBPACK 
// The original bundler  very configurable, large ecosystem.
// Requires ts-loader or babel-loader for TypeScript.
// More setup, but more control.
// Best for: legacy projects, complex enterprise apps, custom pipelines.

// webpack.config.js example:
/*
module.exports = {
  entry: "./src/index.ts",
  resolve: { extensions: [".ts", ".js"] },
  module: {
    rules: [
      { test: /\.ts$/, use: "ts-loader", exclude: /node_modules/ }
    ]
  },
  output: { filename: "bundle.js", path: __dirname + "/dist" }
};
*/

//  COMPARISON 
/*
| Feature          | Vite              | Webpack          |
|------------------|--------------------|------------------|
| Speed (dev)      | Very fast (ESM)    | Slower           |
| TypeScript       | Built-in           | Needs ts-loader  |
| Config           | Minimal            | Verbose          |
| Ecosystem        | Growing            | Mature / large   |
| Best for         | New projects       | Legacy / complex |
*/

//  RECOMMENDATION 
// New project?  Use Vite.
// Existing Webpack project?  Stay on Webpack or migrate gradually.

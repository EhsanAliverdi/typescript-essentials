/*
In this section we will learn how package.json scripts work in TypeScript projects.

We will learn:
- what npm scripts are and why they matter
- the most common scripts in a TypeScript project
- how to chain scripts with pre/post hooks
- how to cross-platform scripts safely

What we are doing:
Building a solid package.json scripts setup so any developer can
build, run, test, and lint the project with a single command.
*/

//  WHAT ARE NPM SCRIPTS? 
// package.json "scripts" map short command names to long shell commands.
// Run with: npm run <name>
// Special names (test, start, build) can be run without "run".

//  TYPICAL SCRIPTS FOR A TYPESCRIPT PROJECT 
/*
"scripts": {
  "build": "tsc",
  "start": "node dist/index.js",
  "dev": "ts-node-dev --respawn src/index.ts",
  "watch": "tsc --watch",
  "clean": "rimraf dist",
  "lint": "eslint . --ext .ts",
  "format": "prettier --write .",
  "test": "jest",
  "test:watch": "jest --watch",
  "test:coverage": "jest --coverage",
  "prebuild": "npm run clean",
  "prepush": "npm run lint && npm test"
}
*/

//  WHAT EACH SCRIPT DOES 
// build          compile TypeScript to dist/
// start          run the compiled production output
// dev            start development server (hot-reload)
// watch          recompile on file change (no restart)
// clean          delete dist/ before a fresh build
// lint           find code-quality issues
// format         auto-format all files with Prettier
// test           run all Jest tests
// test:watch     rerun tests on change
// test:coverage  run tests and show code coverage report
// prebuild       runs AUTOMATICALLY before "build" (pre-hook)
// prepush        runs before git push (with husky)

//  PRE/POST HOOKS 
// Any script named "pre<X>" runs before script <X> automatically.
// Any script named "post<X>" runs after script <X> automatically.

// "prebuild"  "build"  "postbuild"

//  CHAINING COMMANDS 
// Use && to run next command only if previous succeeded:
// "deploy": "npm run build && npm run start"

//  CROSS-PLATFORM SCRIPTS 
// Shell commands differ between Windows and Unix.
// Use       : cross-env    set env variables cross-platform
// Use       : rimraf       cross-platform rm -rf alternative
// Install   : npm install -D cross-env rimraf

// Example:
// "build:prod": "cross-env NODE_ENV=production tsc"

//  QUICK REFERENCE 
// npm run build          compile TypeScript
// npm start              run production server
// npm run dev            start dev with hot-reload
// npm test               run tests
// npm run lint           check code quality
// npm run format         auto-format code

export {};

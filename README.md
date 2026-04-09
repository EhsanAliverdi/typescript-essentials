# TypeScript Essentials

A structured, step-by-step TypeScript learning repository  built for developers who want to go from beginner to interview-ready.

---

## Overview

This repository covers TypeScript from the ground up, organized into clearly separated sections. Each file contains focused explanations and real-world examples. The goal is not just to learn TypeScript syntax, but to understand how it is used in professional projects.

---

## Learning Path

Follow the sections in order  each section builds on the previous one.

| Step | Section | What You Will Learn |
|------|---------|---------------------|
| 1 | **01 Fundamentals** | Variables, types, arrays, enums, type inference |
| 2 | **02 Functions & Objects** | Function types, callbacks, closures, object patterns |
| 3 | **03 OOP** | Classes, inheritance, SOLID principles, design patterns |
| 4 | **04 Advanced Types** | Type aliases, generics, mapped types, conditional types |
| 5 | **05 Real World TypeScript** | APIs, DTOs, error handling, clean architecture |
| 6 | **06 Tooling & Ecosystem** | ESLint, testing, tsconfig, build tools |
| 7 | **07 Playground** | Experiments, scratch pad, interview prep |
| 8 | **08 Scenarios** | Real-world problem scenarios end to end |

---

## Folder Structure

```
typescript-essentials/
 01 Fundamentals/          # Beginner concepts  start here
 02 Functions & Objects/   # Functions, closures, object patterns
 03 OOP/                   # Classes, inheritance, SOLID, design patterns
 04 Advanced Types/        # Type system deep dive
 05 Real World TypeScript/ # Production patterns and real application code
 06 Tooling & Ecosystem/   # Development tools and configuration
 07 Playground/            # Free experimentation and interview practice
 08 Scenarios/             # End-to-end real-world scenarios
 dist/                     # Compiled JavaScript output (auto-generated)
 tsconfig.json             # TypeScript compiler configuration
 package.json              # Project scripts and dependencies
```

---

## How to Use

**1. Install dependencies**
```bash
npm install
```

**2. Compile TypeScript**
```bash
npm run build
```

**3. Watch mode (auto-compile on save)**
```bash
npm run watch
```

**4. Debug a file in VS Code**

Open any `.ts` file, then press `F5`.
The debugger compiles the project and launches the current file automatically.

**5. Work through sections sequentially**

Start from `01 Fundamentals/01 Hello World.ts` and open each file in order.
Each file is self-contained with explanations and examples.

---

## Who This Is For

- **Beginners** learning TypeScript for the first time
- **JavaScript developers** transitioning to TypeScript
- **Interview candidates** preparing for TypeScript, frontend, or backend roles
- **Self-learners** wanting a structured, real-world reference repo

---

## Key Features

- Every file starts with a clear explanation of what you will learn
- Topics progress from beginner to advanced without gaps
- Real patterns used in production: DTOs, Result types, Clean Architecture
- Interview-relevant topics: generics, type guards, SOLID, design patterns
- Playground folder for safe experimentation

---

## Technologies

- TypeScript 5.x
- Node.js (ESM modules)
- ts-node / ts-node-dev for development
- VS Code with source map debugging

/*
In this section we will learn the most common TypeScript mistakes beginners make.

We will learn:
- mistakes that defeat the purpose of TypeScript
- runtime vs compile-time confusion
- how to handle null and undefined safely
- type assertion pitfalls
- and how to fix each mistake

What we are doing:
Reviewing the classic mistakes so we recognize them in our own code
and correct them before they become hard-to-find bugs.
*/

//  MISTAKE 1: Overusing `any` 
// BAD: turns off all type checking
function processData(data: any): any {
  return data.value.trim(); // no error here  crashes at runtime if value is missing
}

// GOOD: use proper types or generics
function processDataSafe(data: { value: string }): string {
  return data.value.trim();
}

//  MISTAKE 2: Ignoring null / undefined 
// BAD: assumes the value always exists
function getLength(str: string | null): number {
  return str!.length; // non-null assertion  dangerous if str is actually null
}

// GOOD: handle null explicitly
function getLengthSafe(str: string | null): number {
  if (str === null) return 0;
  return str.length;
}

// Or use optional chaining:
function getLengthOptional(str: string | null | undefined): number {
  return str?.length ?? 0;
}

//  MISTAKE 3: Type Assertions hiding bugs 
interface User {
  id: number;
  name: string;
}

// BAD: forces TypeScript to believe something that may not be true
const userData = {} as User;
console.log(userData.name.toUpperCase()); // runtime error  name is undefined!

// GOOD: actually populate or validate the object
const safeUser: User = { id: 1, name: "Alice" };
console.log(safeUser.name.toUpperCase());

//  MISTAKE 4: Compile-time vs Runtime confusion 
// TypeScript types are ERASED at runtime  they don't exist when code runs.

interface Config {
  debug: boolean;
  version: string;
}

const config = JSON.parse('{"debug":true,"version":"1.0"}') as Config;
// TypeScript trusts this cast  it does NOT validate the JSON at runtime.
// If the JSON is missing a field, TypeScript won't catch it.

// GOOD: validate external data with Zod, Yup, or manual checks
function isConfig(obj: unknown): obj is Config {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof (obj as Config).debug === "boolean" &&
    typeof (obj as Config).version === "string"
  );
}

//  MISTAKE 5: Forgetting `readonly` on data you don't want mutated 
// BAD: accidentally mutating an object passed as a parameter
function printUser(user: User): void {
  (user as Record<string, unknown>).name = "Hacked"; // silently mutates caller's data
}

// GOOD: readonly signals that the function won't (and shouldn't) mutate it
function printUserSafe(user: Readonly<User>): void {
  console.log(user.name);
}

//  MISTAKE 6: Using `==` instead of `===` 
// BAD: loose equality causes unexpected coercion
const x = 0;
if (x == false) console.log("same with =="); // true! 0 coerces to false

// GOOD: always use strict equality
if (x === 0) console.log("correct with ===");

//  MISTAKE 7: Not using `unknown` for caught errors 
// BAD (old TypeScript):
// try {} catch (e) { console.log(e.message); }  // e is `any` in older TS

// GOOD: TypeScript 4+ catches are `unknown`  type-narrow first
try {
  throw new Error("boom");
} catch (error: unknown) {
  if (error instanceof Error) {
    console.log(error.message); // safe  we know it's an Error
  }
}

export {};

/*
In this section we will learn common mistakes.

We will learn:
- pitfalls to avoid
*/

// ❌ Overusing any
let data: any = "hello";

// ❌ Ignoring null checks
let value: string | null = null;
// value.toUpperCase(); ❌

// ❌ Assuming types exist at runtime
type User = { name: string };
// Type is erased at runtime

// ✅ Good practice:
let safeValue: unknown = "test";

if (typeof safeValue === "string") {
  console.log(safeValue.toUpperCase());
}
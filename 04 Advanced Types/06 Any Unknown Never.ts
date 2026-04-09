/*
In this section we will learn about any, unknown, and never.

We will learn:
- differences between them
- when to use each
*/


// any → disables type checking (avoid)
let data: any = "hello";
data = 10;
data.toUpperCase(); // no error ❌ risky

// unknown forces us to check the type before using it, making it a safer alternative to any.
// unknown → safer alternative
let value: unknown = "hello";

// value.toUpperCase(); ❌ must check first
if (typeof value === "string") {
  value.toUpperCase(); // ✅
}

// never → represents impossible values
function throwError(message: string): never {
  throw new Error(message);
}

// never example
function infiniteLoop(): never {
  while (true) {}
}
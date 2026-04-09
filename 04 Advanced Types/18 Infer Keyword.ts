/*
In this section we will learn the infer keyword.

We will learn:
- extracting types dynamically
- using infer inside conditional types

What we are doing:
We are "pulling out" types from other types.
*/

// Extract return type
type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function add(a: number, b: number) {
  return a + b;
}

type Result = GetReturnType<typeof add>; // number

/*
infer is heavily used in:
- utility types
- advanced libraries
*/
/*
In this section we will practice TypeScript challenges.

We will learn:
- thinking in types
- solving type-level problems

What we are doing:
We are improving our TypeScript problem-solving skills.
*/

// Challenge 1: Make all properties readonly
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

// Challenge 2: Remove null/undefined
type NonNullable<T> = T extends null | undefined ? never : T;

// Challenge 3: Extract array element type
type ElementType<T> = T extends (infer U)[] ? U : T;

// Test
type A = ElementType<string[]>; // string

/*
Practice ideas:
- Partial<T>
- Required<T>
- DeepReadonly<T>
*/
/*
In this section we will learn conditional types.

We will learn:
- type logic using conditions
- T extends U ? X : Y pattern

What we are doing:
We are adding "if/else" logic inside types.
*/

// Basic example
type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false

// Real-world example
type ApiResponse<T> = T extends Error
  ? { success: false; error: string }
  : { success: true; data: T };
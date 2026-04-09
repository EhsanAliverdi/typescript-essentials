/*
In this section we will learn mapped types.

We will learn:
- transforming existing types
- iterating over keys of a type
- creating reusable utility types

What we are doing:
We are dynamically creating new types from existing ones.
*/

type User = {
  id: number;
  name: string;
};

// Make all properties optional
type PartialUser = {
  [K in keyof User]?: User[K];
};

// Equivalent to built-in Partial<T>
const user: PartialUser = {
  name: "Ehsan"
};

/*
Mapped types are used heavily in:
- utility types (Partial, Readonly, etc.)
- libraries
*/
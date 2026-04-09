/*
In this section we will learn utility types.

We will learn:
- transforming types
*/

//utility types are built-in types that allow us to transform existing types in various ways. 
// They are very useful for creating new types based on existing ones without having to rewrite the entire type definition.
// Here are some of the most commonly used utility types in TypeScript:
type User = {
  id: number;
  name: string;
};

// Partial
type PartialUser = Partial<User>;

// Required
type RequiredUser = Required<User>;

// Readonly
type ReadonlyUser = Readonly<User>;

// Pick
type UserName = Pick<User, "name">;

// Omit
type UserWithoutId = Omit<User, "id">;
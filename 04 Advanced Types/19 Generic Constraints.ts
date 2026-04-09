/*
In this section we will learn generic constraints.

We will learn:
- restricting generic types
*/
// Generic constraint  allows us to specify that a generic type must satisfy certain conditions.
// We can use the extends keyword to create a constraint on a generic type parameter.
// This ensures that the type used with the generic function has certain properties or methods.

function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

getLength("hello");
getLength([1, 2, 3]);
// getLength(10); ❌
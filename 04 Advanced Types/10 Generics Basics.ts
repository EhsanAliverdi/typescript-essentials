/*
In this section we will learn generics.

We will learn:
- reusable typed code
*/
// Generic function are functions that can work with any type, specified when called.
// We use <T> to define a generic type parameter, which can be used in the function signature.
// This allows us to write functions that are flexible and type-safe, without sacrificing type information.

function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(10);
const str = identity("hello");

// Generic type
type Box<T> = {
  value: T;
};

const numberBox: Box<number> = { value: 100 };
/*
In this section we will learn type aliases.

We will learn:
- creating reusable types
*/

type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Ali",
  age: 25
};

// Union alias
type ID = string | number;

let userId: ID = 123;
userId = "abc";
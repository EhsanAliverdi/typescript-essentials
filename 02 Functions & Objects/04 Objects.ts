/*
In this section we will learn how to define object types.

We will learn:
- object structure typing
- inline vs reusable types
*/

let user: { name: string; age: number } = {
  name: "Ehsan",
  age: 30
};

// Optional properties
let product: { name: string; price: number; discount?: number } = {
  name: "Laptop",
  price: 1000
};

// Readonly
let config: { readonly id: number } = { id: 1 };
// config.id = 2; ❌

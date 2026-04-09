/*
In this section we will learn object patterns.

We will learn:
- structuring objects
- immutability
- object spreading

What we are doing:
We are improving how we work with objects in real applications.
*/

// Basic object
const user = {
  name: "Ehsan",
  age: 30
};

// Immutability (avoid mutation)
const updatedUser = {
  ...user,
  age: 31
};

// Nested update
const settings = {
  theme: "dark",
  layout: {
    sidebar: true
  }
};

const newSettings = {
  ...settings,
  layout: {
    ...settings.layout,
    sidebar: false
  }
};
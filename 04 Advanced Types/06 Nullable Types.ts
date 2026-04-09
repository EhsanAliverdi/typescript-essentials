/*
In this section we will learn nullable types.

We will learn:
- handling null and undefined
*/

let value: string | null = null;

value = "hello";

// Safe check
if (value !== null) {
  console.log(value.toUpperCase());
}

// Optional chaining
const user = {
  name: "Ehsan",
  address: {
    city: "Sydney"
  }
};

console.log(user.address?.city);
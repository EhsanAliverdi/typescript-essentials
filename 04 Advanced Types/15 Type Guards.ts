/*
In this section we will learn type guards.

We will learn:
- narrowing types safely
*/

function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

console.log(print("hello"));
console.log(print(3.14159));

// in operator
function logUser(user: { name: string } | { id: number }) {
  if ("name" in user) {
    console.log(user.name);
  }
}

logUser({ name: "Ali" });
logUser({ id: 123 });
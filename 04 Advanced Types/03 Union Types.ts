/*
In this section we will learn union types.

We will learn:
- multiple possible types
*/
//union types allow a value to be one of several types. We use the | operator to define them.

let value: string | number;

value = "hello";
value = 10;

// Function example
function printId(id: string | number) {
  console.log(id);
}
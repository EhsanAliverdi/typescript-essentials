/*
In this section we will learn about tuples.

We will learn:
- fixed length arrays
- ordered types
*/

let person: [string, number] = ["Ehsan", 30];

// Access
let name = person[0];
let age = person[1];

// Optional tuple elements
let optionalTuple: [string, number?] = ["Ali"];

// Named tuples (cleaner)
let user: [name: string, age: number] = ["John", 25];

// ⚠️ Be careful
person.push(100); // allowed but not recommended
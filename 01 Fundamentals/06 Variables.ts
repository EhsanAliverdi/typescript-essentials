/*
In this section we will learn how to declare variables in TypeScript.
We will use let, const, and understand the difference between mutable
and immutable values, as well as when to prefer one over the other.
*/

// 1. `let`: This is the most common way to declare a variable. It allows you to reassign a new value to the variable later in your code. 
let myName: string = "Alice";
console.log(myName); // Output: Alice

// 2. `const`: This is used to declare a variable that cannot be reassigned after it has been initialized. However, if the variable is an object or an array, you can still modify its properties or elements.
const myAge: number = 30;
console.log(myAge); // Output: 30

// 3. `var`: This is the old way to declare variables in JavaScript. It has function scope and can lead to unexpected behavior due to hoisting. It is generally recommended to avoid using `var` in modern TypeScript code.
var myCity: string = "New York";
console.log(myCity); // Output: New York

// TypeScript also allows you to declare variables without specifying a type. In this case, TypeScript will infer the type based on the assigned value.
let myCountry = "USA"; // TypeScript infers that myCountry is of type string
console.log(myCountry); // Output: USA

// You can also declare multiple variables in a single statement.
let firstName: string = "John", lastName: string = "Doe", age: number = 25;
console.log(firstName, lastName, age); // Output: John Doe 25

// In summary, variables in TypeScript can be declared using `let`, `const`, or `var`, with `let` and `const` being the preferred options for modern TypeScript development. Always choose the appropriate variable declaration based on whether you need to reassign the variable or not.
let ids: number[] = [1, 2, 3, 4, 5];
console.log(ids); // Output: [1, 2, 3, 4, 5]

// You can also declare variables with union types, which allow a variable to hold values of multiple types.
let id: number | string = 123;
console.log(id); // Output: 123

// you can also declare variables with the `any` type, which allows you to assign any type of value to the variable. However, it is generally recommended to avoid using `any` as it defeats the purpose of using TypeScript's type system.
let randomValue: any = "Hello";
console.log(randomValue);

// You can also declare arrays with a specific type.
let names: string[] = ["Alice", "Bob", "Charlie"];
console.log(names); // Output: ["Alice", "Bob", "Charlie"]

// You can also declare arrays with a specific type using the generic Array<T> syntax.
let numbers: Array<number> = [1, 2, 3, 4, 5];
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// In addition to basic types, you can also declare variables with more complex types, such as objects and tuples.
let person: { name: string; age: number } = { name: "Alice", age: 30 };
console.log(person); // Output: { name: "Alice", age: 30 }

// you ccan also decleary array of objects with any type
let xarray: any[] = [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }];
console.log(xarray); // Output: [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }]

// Tuples allow you to express an array with a fixed number of elements whose types are known.
let tuple: [string, number] = ["Alice", 30];
console.log(tuple); // Output: ["Alice", 30]


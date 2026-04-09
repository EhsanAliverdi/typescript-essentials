/*
In this section we will learn advanced function parameters.

We will learn:
- optional parameters
- default values
- rest parameters
*/

// Optional parameter
function greet(name: string, age?: number) {
  console.log(name, age);
}

greet("Ehsan");
greet("Ehsan", 30);

// Default parameter
function multiply(a: number, b: number = 2) {
  return a * b;
}

multiply(5); // 10

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

let result = sum(1, 2, 3, 4);
console.log(result); // 10

// Combining
function printInfo(name: string, ...skills: string[]) {
  console.log(name, skills);
}

printInfo("Ehsan", "JavaScript", "TypeScript", "React");
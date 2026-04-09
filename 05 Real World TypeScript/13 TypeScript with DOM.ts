/*
In this section we will learn DOM usage.

We will learn:
- working with HTML elements
*/

const input = document.getElementById("name") as HTMLInputElement;

input.value = "Hello";

input.addEventListener("input", (e) => {
  console.log((e.target as HTMLInputElement).value);
});
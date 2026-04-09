/*
In this section we will learn callback functions.

We will learn:
- passing functions as arguments
- typing callbacks
- common patterns

What we are doing:
We are using functions as inputs to other functions.
*/

// Callback example
function processNumber(num: number, callback: (n: number) => number) {
  return callback(num);
}

const result = processNumber(5, (n) => n * 2);
console.log(result); // 10

// Real example
function fetchData(callback: (data: string) => void) {
  const data = "Server data";
  callback(data);
}

fetchData((data) => {
  console.log(data);
});


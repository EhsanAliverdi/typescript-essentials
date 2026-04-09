/*
In this section we will learn async/await.

We will learn:
- working with promises
*/
// async/await is a syntax sugar over promises, making asynchronous code easier to read and write.
// async functions always return a promise, even if we return a non-promise value.

async function fetchData(): Promise<string> {
  return "data";
}

async function main() {
  const result = await fetchData();
  console.log(result);
}

main();
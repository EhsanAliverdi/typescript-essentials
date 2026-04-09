/*
In this section we will learn closures.

We will learn:
- capturing outer variables
- maintaining state
- real-world usage

What we are doing:
We are using functions that "remember" their environment.
*/

function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const increment = counter();

console.log(increment()); // 1
console.log(increment()); // 2

// Real use case: private state
function createUser(name: string) {
  let secret = "hidden";

  return {
    getName: () => name,
    getSecret: () => secret
  };
}
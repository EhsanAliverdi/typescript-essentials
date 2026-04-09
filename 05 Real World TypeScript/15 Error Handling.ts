/*
In this section we will learn error handling.

We will learn:
- try/catch
- safe error typing
*/
// Error handling in TypeScript is similar to JavaScript, 
// but we can use type guards to ensure we are working with the correct error type.

try {
  throw new Error("Something went wrong");
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
}


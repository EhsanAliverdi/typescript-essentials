/*
In this section we learn how to handle errors in TypeScript.

We will learn:
- try/catch/finally
- safe error typing with unknown
- custom error classes
- handling unknown errors properly
*/

// Basic try/catch
try {
  throw new Error("Something went wrong");
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
}

// Custom error class
class AppError extends Error {
  constructor(
    message: string,
    public readonly code: number
  ) {
    super(message);
    this.name = "AppError";
  }
}

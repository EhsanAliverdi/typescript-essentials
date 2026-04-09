/*
In this section we will learn how to handle errors in TypeScript.

We will learn:
- try/catch/finally with safe typing
- why catch gives "unknown" in strict mode
- custom error classes
- avoiding swallowed errors in async code
*/

//  SAFE CATCH TYPING 
// In TypeScript strict mode, error in catch is "unknown"  not Error
try {
  throw new Error("Something went wrong");
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message); // safe  narrowed to Error
  } else {
    console.log("Unknown error:", error);
  }
}

//  CUSTOM ERROR CLASSES 
class AppError extends Error {
  constructor(
    message: string,
    public readonly code: number
  ) {
    super(message);
    this.name = "AppError";
  }
}

class NotFoundError extends AppError {
  constructor(resource: string) {
    super(`${resource} not found`, 404);
    this.name = "NotFoundError";
  }
}

//  USAGE IN ASYNC CODE 
async function findUser(id: number): Promise<{ id: number; name: string }> {
  if (id <= 0) throw new NotFoundError("User");
  return { id, name: "Ehsan" };
}

async function run() {
  try {
    const user = await findUser(-1);
    console.log(user.name);
  } catch (err) {
    if (err instanceof NotFoundError) {
      console.error(`404: ${err.message}`);
    } else {
      throw err; // re-throw unexpected errors
    }
  }
}

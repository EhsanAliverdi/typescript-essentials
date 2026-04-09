/*
In this section we will learn advanced API error handling patterns in TypeScript.

We will learn:
- the Result<T> pattern for safe API responses
- avoiding raw error throws across layers
- typed HTTP error objects
- mapping unknown errors safely
*/

//  RESULT PATTERN 
// Instead of throwing, return a typed success or failure object.

type Success<T> = { ok: true; data: T };
type Failure = { ok: false; error: ApiError };
type Result<T> = Success<T> | Failure;

interface ApiError {
  status: number;
  message: string;
  code?: string;
}

//  TYPED FETCH WRAPPER 
async function fetchUser(id: number): Promise<Result<User>> {
  try {
    const res = await fetch(`/api/users/${id}`);

    if (!res.ok) {
      return {
        ok: false,
        error: { status: res.status, message: res.statusText },
      };
    }

    const data = (await res.json()) as User;
    return { ok: true, data };
  } catch (err) {
    return {
      ok: false,
      error: {
        status: 0,
        message: err instanceof Error ? err.message : "Unknown error",
      },
    };
  }
}

//  USAGE 
interface User {
  id: number;
  name: string;
  email: string;
}

async function main() {
  const result = await fetchUser(1);

  if (result.ok) {
    console.log("User:", result.data.name); // fully typed
  } else {
    console.error("Error:", result.error.message, "Status:", result.error.status);
  }
}

//  WHY THIS PATTERN? 
// - Forces callers to handle both success and failure
// - No silent crashes from uncaught exceptions
// - TypeScript narrows the type correctly
// - Easy to test and reason about

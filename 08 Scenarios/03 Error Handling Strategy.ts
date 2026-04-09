/*
Scenario: Error Handling Strategy

Real-world problem:
Error handling in TypeScript is often done with try/catch, but that
leaves the error type as `unknown` and forces callers to guess whether
a function succeeded. This creates fragile code.

Goal: Use the Result<T, E> pattern to make success/failure explicit
in the return type  no exceptions for expected failures.
*/

//  RESULT TYPE 
type Result<T, E = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E };

//  CUSTOM ERROR TYPES 
class NotFoundError extends Error {
  constructor(public readonly resource: string, public readonly id: number) {
    super(`${resource} with id ${id} not found`);
    this.name = "NotFoundError";
  }
}

class ValidationError extends Error {
  constructor(public readonly field: string, message: string) {
    super(`Validation failed on '${field}': ${message}`);
    this.name = "ValidationError";
  }
}

type AppError = NotFoundError | ValidationError | Error;

//  DOMAIN 
interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];

//  FUNCTIONS RETURNING Result 
function findUser(id: number): Result<User, NotFoundError> {
  const user = users.find((u) => u.id === id);
  if (!user) {
    return { ok: false, error: new NotFoundError("User", id) };
  }
  return { ok: true, value: user };
}

function validateEmail(email: string): Result<string, ValidationError> {
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!isValid) {
    return { ok: false, error: new ValidationError("email", "Invalid email format") };
  }
  return { ok: true, value: email };
}

function updateUserEmail(userId: number, newEmail: string): Result<User, AppError> {
  const emailResult = validateEmail(newEmail);
  if (!emailResult.ok) return emailResult;

  const userResult = findUser(userId);
  if (!userResult.ok) return userResult;

  const updatedUser: User = { ...userResult.value, email: emailResult.value };
  return { ok: true, value: updatedUser };
}

//  USAGE 
// Success path
const result1 = updateUserEmail(1, "newalice@example.com");
if (result1.ok) {
  console.log("Updated:", result1.value.name, "", result1.value.email);
}

// User not found
const result2 = updateUserEmail(99, "test@example.com");
if (!result2.ok) {
  console.log(`Error [${result2.error.name}]: ${result2.error.message}`);
}

// Invalid email
const result3 = updateUserEmail(1, "not-an-email");
if (!result3.ok) {
  const err = result3.error;
  if (err instanceof ValidationError) {
    console.log(`Validation failed on field: ${err.field}`);
  }
}

//  HELPER: wrapping throwing code 
function tryCatch<T>(fn: () => T): Result<T> {
  try {
    return { ok: true, value: fn() };
  } catch (err: unknown) {
    return { ok: false, error: err instanceof Error ? err : new Error(String(err)) };
  }
}

const parsed = tryCatch(() => JSON.parse('{"name":"Alice"}') as User);
if (parsed.ok) console.log("Parsed name:", parsed.value.name);

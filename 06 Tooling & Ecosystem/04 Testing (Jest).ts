/*
In this section we will learn how to test TypeScript code with Jest.

We will learn:
- why testing matters for TypeScript projects
- how to set up Jest with TypeScript
- how to write typed unit tests
- common testing patterns: arrange / act / assert

What we are doing:
Writing real unit tests for TypeScript functions so we can catch bugs
early and refactor with confidence.
*/

//  INSTALL 
// npm install -D jest ts-jest @types/jest

//  jest.config.ts 
/*
import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
};

export default config;
*/

//  package.json script 
/*
"scripts": {
  "test": "jest",
  "test:watch": "jest --watch"
}
*/

//  FUNCTION TO TEST 
function add(a: number, b: number): number {
  return a + b;
}

function divide(a: number, b: number): number {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}

//  UNIT TESTS 
// In a real project, tests live in a separate file: add.test.ts
// Shown inline here for learning purposes.

/*
import { add, divide } from "./math";        // import the module being tested

describe("add()", () => {
  it("adds two positive numbers", () => {
    // Arrange
    const a = 2;
    const b = 3;

    // Act
    const result = add(a, b);

    // Assert
    expect(result).toBe(5);
  });

  it("handles negative numbers", () => {
    expect(add(-1, -2)).toBe(-3);
  });
});

describe("divide()", () => {
  it("divides correctly", () => {
    expect(divide(10, 2)).toBe(5);
  });

  it("throws when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
  });
});
*/

//  TYPED TEST UTILITIES 
interface User {
  id: number;
  name: string;
  email: string;
}

function getUser(id: number): User {
  return { id, name: "Alice", email: "alice@example.com" };
}

/*
describe("getUser()", () => {
  it("returns a user with the given id", () => {
    const user: User = getUser(1);
    expect(user.id).toBe(1);
    expect(user.name).toBe("Alice");
  });
});
*/

// Types give you autocomplete in tests  no guessing property names.
export { add, divide, getUser };

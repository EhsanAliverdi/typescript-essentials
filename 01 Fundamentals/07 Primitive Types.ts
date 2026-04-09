/*
In this section we will learn about primitive types in TypeScript.

We will learn:
- basic types
- how to annotate them
*/

let username: string = "John";
let score: number = 95;
let isLoggedIn: boolean = true;

// Special types
let nothing: null = null;
let notDefined: undefined = undefined;

// bigint
let bigNumber: bigint = 12345678901234567890n;

// symbol (rarely used)
let uniqueId: symbol = Symbol("id");
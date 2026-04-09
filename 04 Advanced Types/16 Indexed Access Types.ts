/*
In this section we will learn indexed access types.

We will learn:
- accessing types inside other types
- reusing specific properties

What we are doing:
We are extracting specific types from objects.
*/

type User = {
  id: number;
  name: string;
  email: string;
};

// Extract specific property type
type UserName = User["name"]; // string

// Multiple properties
type UserInfo = User["name" | "email"];

// Array example
type Users = User[];
type SingleUser = Users[number]; // User
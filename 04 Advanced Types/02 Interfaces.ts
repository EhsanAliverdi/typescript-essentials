/*
In this section we will learn interfaces.

We will learn:
- defining contracts
- extending interfaces
*/

interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Sara",
  age: 28
};

// Extending
interface Admin extends User {
  role: string;
}

const admin: Admin = {
  name: "Ehsan",
  age: 30,
  role: "admin"
};
/*
In this section we will learn intersection types.

We will learn:
- combining multiple types
*/

type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type Staff = Person & Employee;

const staff: Staff = {
  name: "Ali",
  employeeId: 123
};
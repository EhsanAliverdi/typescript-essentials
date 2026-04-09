/*
In this section we compare type aliases and interfaces.

We will learn:
- differences and use cases
*/

// Interface
interface User {
  name: string;
}

// Type alias
type UserType = {
  name: string;
};

// Key differences:
// - interfaces can extend
// - types support unions & intersections
// Use interfaces for defining contracts and object shapes
// Use type aliases for complex types and unions


// Example of extending an interface
interface Employee extends User {
  employeeId: number;
}

// Example of creating a type alias with intersection
type EmployeeType = UserType & {
  employeeId: number;
};


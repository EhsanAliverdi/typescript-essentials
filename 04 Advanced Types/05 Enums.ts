/*
In this section we will learn about enums.

We will learn:
- named constants
- numeric and string enums
*/

// Numeric enum
enum Status {
  Pending,
  Approved,
  Rejected
}

let currentStatus: Status = Status.Approved;

// String enum (preferred)
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

let userRole: Role = Role.Admin;

// Reverse mapping (only numeric enums)
console.log(Status[1]); // "Approved"
console.log(Status.Approved); // 1

// Enums with custom values
enum CustomStatus {
  Pending = 1,
  Approved = 2,
  Rejected = 3
}

let customStatus: CustomStatus = CustomStatus.Approved;
console.log(CustomStatus[2]); // "Approved"
console.log(CustomStatus.Approved); // 2
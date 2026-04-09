/*
In this section we will learn readonly and optional properties.

We will learn:
- making properties immutable
- optional properties
*/
// readonly keyword makes a property immutable after it has been assigned a value.

type User = {
  readonly id: number;
  name: string;
  age?: number;
};

const user: User = {
  id: 1,
  name: "Ali"
};

// user.id = 2; // ❌ Error: Cannot assign to 'id' because it is a read-only property.

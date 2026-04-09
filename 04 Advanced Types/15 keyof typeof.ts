/*
In this section we will learn keyof and typeof.

We will learn:
- extracting keys from types
- using typeof on variables
- combining both

What we are doing:
We are turning runtime values into TypeScript types.
*/

const user = {
  id: 1,
  name: "Ehsan"
};

// typeof → get type from variable
type User = typeof user;

// keyof → get keys
type UserKeys = keyof User; // "id" | "name"

// Combined usage
function getValue(key: UserKeys) {
  return user[key];
}
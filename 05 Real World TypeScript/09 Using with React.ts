/*
In this section we will learn how TypeScript is used with React.

We will learn:
- typing props
- typing state
- typing hooks

What we are doing:
We are making React components safer and more predictable.
*/
/*
import React, { useState } from "react";

// Props type
type Props = {
  name: string;
};

// Functional component
const UserCard: React.FC<Props> = ({ name }) => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => setCount(count + 1)}>
        Click {count}
      </button>
    </div>
  );
};

export default UserCard;
*/
/*
Key idea:
- TypeScript ensures correct props and state usage
*/
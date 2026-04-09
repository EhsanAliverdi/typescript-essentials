/*
In this section we will learn recursive types.

We will learn:
- types that reference themselves
- modeling nested data

What we are doing:
We are handling tree-like or deeply nested structures.
*/

type TreeNode = {
  value: string;
  children?: TreeNode[];
};

const tree: TreeNode = {
  value: "root",
  children: [
    { value: "child1" },
    { value: "child2" }
  ]
};

// JSON example
type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | { [key: string]: JSONValue };
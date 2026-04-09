/*
In this section we will learn literal types.

We will learn:
- restricting values
*/

type Direction = "left" | "right" | "up" | "down";

let move: Direction = "left";
// move = "forward"; ❌

// Combined
type Status = "success" | "error";
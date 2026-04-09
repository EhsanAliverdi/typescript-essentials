/*
In this section we will learn how to use TypeScript with Node.js.

We will learn:
- setting up a backend project
- writing APIs with TypeScript
- running TS in Node

What we are doing:
We are building backend applications using TypeScript.
*/

// Example Express API
/*
import express from "express";

const app = express();
app.use(express.json());

app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  res.json({
    id,
    name: "Ehsan"
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
*/

/*
In this example, we set up a simple Express server with TypeScript. We define a GET endpoint that retrieves a user by ID and returns a JSON response. The TypeScript compiler will help us catch any type errors in our code, making our backend development more robust and maintainable.
*/
/*
Run with:
- ts-node (dev)
- tsc + node (prod)
*/
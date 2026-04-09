/*
In this section we will learn how to work with environment variables in TypeScript.

We will learn:
- what environment variables are
- how to type process.env safely
- avoiding runtime errors

What we are doing:
We are making configuration safe and predictable across environments.
*/

// process.env values are always string | undefined
// const dbHost = process.env.DB_HOST;

// ❌ unsafe
// console.log(dbHost.toUpperCase());

// ✅ safe check
// if (!dbHost) {
//   throw new Error("DB_HOST is missing");
// }

// Strong typing pattern
type Env = {
  DB_HOST: string;
  PORT: string;
};

// function getEnv(): Env {
//   const { DB_HOST, PORT } = process.env;

//   if (!DB_HOST || !PORT) {
//     throw new Error("Missing environment variables");
//   }

//   return { DB_HOST, PORT };
// }

// const env = getEnv();
// console.log(env.DB_HOST);

/*
Best practice:
- validate env variables at startup
- never assume they exist
*/
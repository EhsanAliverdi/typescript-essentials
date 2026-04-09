/*
In this section we will learn how to validate data at runtime in TypeScript.

We will learn:
- why runtime validation is needed (TypeScript only checks at compile time)
- using Zod for schema-based validation
- using Yup as an alternative
- integrating validation with TypeScript types
*/

//  ZOD EXAMPLE 
// import { z } from "zod";
//
// const UserSchema = z.object({
//   id: z.number(),
//   name: z.string().min(1),
//   email: z.string().email(),
// });
//
// type User = z.infer<typeof UserSchema>;  // TypeScript type from schema
//
// const result = UserSchema.safeParse({ id: 1, name: "Ehsan", email: "e@test.com" });
// if (result.success) {
//   console.log(result.data.name);  // fully typed
// } else {
//   console.error(result.error.issues);
// }

//  YUP EXAMPLE 
// import * as yup from "yup";
//
// const userSchema = yup.object({
//   id: yup.number().required(),
//   name: yup.string().required(),
//   email: yup.string().email().required(),
// });
//
// try {
//   const valid = await userSchema.validate({ id: 1, name: "Ehsan", email: "bad" });
// } catch (err) {
//   console.error(err);
// }

//  KEY DIFFERENCE 
// Zod   synchronous, generates TS types, preferred for new projects
// Yup   async-friendly, popular in React/Formik ecosystems

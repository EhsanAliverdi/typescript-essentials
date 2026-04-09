/*
In this section we learn how to structure a TypeScript project.

We will learn:
- separating layers (domain, application, infrastructure)
- organizing files and modules
- scaling projects cleanly
- naming conventions and folder layout
*/

/*
Recommended structure:

src/
  domain/        <- business logic, entities, interfaces
  application/   <- use cases, services
  infrastructure/<- database, API clients, adapters
  main.ts        <- entry point
*/

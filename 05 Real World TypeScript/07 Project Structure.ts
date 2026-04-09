/*
In this section we will learn how to structure a TypeScript project.

We will learn:
- separating concerns
- organizing code into layers
- scalable architecture

What we are doing:
We are designing a clean and maintainable project structure.
*/

/*
Example structure:

src/
├── domain/          // business models, interfaces
├── application/     // use cases, services
├── infrastructure/  // database, APIs, external services
├── presentation/    // controllers, UI
└── main.ts          // entry point
*/

/*
Key idea:
- domain should not depend on infrastructure
- use interfaces to decouple layers
*/
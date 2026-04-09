/*
In this section we will learn template literal types.

We will learn:
- building string-based types
- combining string unions

What we are doing:
We are generating dynamic string types.
*/

type Event = "click" | "hover";

// Create new type
type EventHandler = `on${Capitalize<Event>}`;

// Result:
// "onClick" | "onHover"

const handler: EventHandler = "onClick";

/*
Used in:
- APIs
- event systems
- naming conventions
*/
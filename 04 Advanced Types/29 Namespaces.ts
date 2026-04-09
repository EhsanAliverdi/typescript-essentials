/*
In this section we will learn namespaces.

We will learn:
- grouping code (legacy approach)
*/

// Namespaces are a way to group related code together.
// They were used before modules were introduced in TypeScript.
// They are still supported, but modules are generally recommended for new code.

namespace Utils {
  export function log(message: string) {
    console.log(message);
  }
}

Utils.log("Hello");
/*
In this section we will learn how to keep TypeScript code clean and consistent.

We will learn:
- what linting is and why it matters
- what code formatting is and why it matters
- how ESLint catches code-quality problems
- how Prettier enforces consistent formatting
- how to use both together in a TypeScript project

What we are doing:
Setting up ESLint and Prettier so the entire team writes code
in the same style automatically  no manual formatting debates.
*/

//  WHY LINTING? 
// ESLint finds problems BEFORE they become bugs:
//   - unused variables
//   - missing return types
//   - implicit any

//  WHY FORMATTING? 
// Prettier handles indentation, quotes, trailing commas.
// Everyone pushes the same style  code reviews focus on logic, not style.

//  INSTALL 
// npm install -D eslint prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin

//  .eslintrc.json 
/*
{
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/explicit-function-return-type": "off"
  }
}
*/

//  .prettierrc 
/*
{
  "semi": true,
  "singleQuote": false,
  "printWidth": 100,
  "trailingComma": "es5"
}
*/

//  package.json scripts 
/*
"scripts": {
  "lint": "eslint . --ext .ts",
  "format": "prettier --write ."
}
*/

//  TIP 
// Install the ESLint and Prettier VS Code extensions.
// Enable "Format on Save" in VS Code settings for automatic formatting.

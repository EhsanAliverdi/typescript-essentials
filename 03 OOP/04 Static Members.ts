/*
In this section we will learn static members.

We will learn:
- static properties and methods
*/

class MathUtil {
  static PI = 3.14;

  static add(a: number, b: number) {
    return a + b;
  }
}

// No instance needed
console.log(MathUtil.PI);
console.log(MathUtil.add(2, 3));
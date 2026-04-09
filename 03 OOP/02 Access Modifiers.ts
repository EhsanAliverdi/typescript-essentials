/*
In this section we will learn access modifiers.

We will learn:
- public, private, protected
*/

// Access modifiers control the visibility and accessibility of class members (properties and methods).
// In TypeScript, we have three access modifiers: public, private, and protected.
// - public: The member is accessible from anywhere. This is the default if no access modifier is specified.
// - private: The member is only accessible within the class it is defined in.
// - protected: The member is accessible within the class and its subclasses.

class User {
  public name: string;
  private password: string;

  constructor(name: string, password: string) {
    this.name = name;
    this.password = password;
  }

  checkPassword(pw: string) {
    return this.password === pw;
  }
}

const user = new User("Ali", "123");
// user.password ❌ Error: Property 'password' is private and only accessible within class 'User'.
console.log(user.name);
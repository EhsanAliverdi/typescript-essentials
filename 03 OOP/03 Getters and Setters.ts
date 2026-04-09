/*
In this section we will learn getters and setters.

We will learn:
- controlling access to properties
*/
// Getters and setters allow us to control access to properties of a class. 
// They provide a way to define custom behavior when getting or setting a property.
class Product {
  private _price: number = 0;

  get price() {
    return this._price;
  }

  set price(value: number) {
    if (value > 0) {
      this._price = value;
    }
  }
}

const p = new Product();
p.price = 100;
console.log(p.price);
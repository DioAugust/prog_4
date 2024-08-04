const Product = require("./Product");

class Food extends Product {
  constructor(id, name, price, expiryDate) {
    super(id, name, price);
    this.expiryDate = expiryDate;
  }
}

module.exports = Food;

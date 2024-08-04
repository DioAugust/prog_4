// src/models/Toy.js
const Product = require("./Product");

class Toy extends Product {
  constructor(id, name, price, material) {
    super(id, name, price);
    this.material = material;
  }
}

module.exports = Toy;

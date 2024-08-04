class Care {
  constructor(id, description) {
    this.id = id;
    this.description = description;
  }

  performCare() {
    return `Performing care: ${this.description}`;
  }
}

module.exports = Care;

const Care = require("./Care");

class BasicCare extends Care {
  constructor(id, description) {
    super(id, description);
  }

  performCare() {
    return `Performing basic care: ${this.description}`;
  }
}

module.exports = BasicCare;

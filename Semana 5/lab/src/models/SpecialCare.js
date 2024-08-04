const Care = require("./Care");

class SpecialCare extends Care {
  constructor(id, description, extraAttention) {
    super(id, description);
    this.extraAttention = extraAttention;
  }

  performCare() {
    return `Performing special care with extra attention: ${this.extraAttention}`;
  }
}

module.exports = SpecialCare;

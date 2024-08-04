class Pet {
  constructor(id, name, type, age) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.age = age;
  }

  getInfo() {
    return `${this.name} is a ${this.age} year old ${this.type}`;
  }
}

module.exports = Pet;

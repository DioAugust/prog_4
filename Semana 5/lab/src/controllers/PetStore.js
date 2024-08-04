const Pet = require("../models/Pet");
const FilePersistence = require("../models/FilePersistence");

class PetStore {
  constructor(persistence) {
    this.persistence = persistence;
    this.pets = [];
  }

  addPet(pet) {
    this.pets.push(pet);
    this.persistence.save(this.pets);
  }

  getPets() {
    return this.pets;
  }

  loadPets() {
    this.pets = this.persistence.load();
  }
}

module.exports = PetStore;

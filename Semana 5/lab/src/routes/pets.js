const express = require("express");
const Pet = require("../models/Pet");
const PetStore = require("../controllers/PetStore");
const FilePersistence = require("../models/FilePersistence");

const router = express.Router();
const petStore = new PetStore(new FilePersistence("pets.json"));
petStore.loadPets();

router.get("/", (req, res) => {
  res.json(petStore.getPets());
});

router.post("/", (req, res) => {
  const { id, name, type, age } = req.body;
  const pet = new Pet(id, name, type, age);
  petStore.addPet(pet);
  res.status(201).json(pet);
});

module.exports = router;

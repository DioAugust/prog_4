const { Game } = require("../models");

exports.createGame = async (req, res) => {
  try {
    const { name, description, genre, platform } = req.body;
    const newGame = await Game.create({ name, description, genre, platform });
    res.status(201).json(newGame);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getGameById = async (req, res) => {
  try {
    const game = await Game.findByPk(req.params.id);

    if (game) {
      res.status(200).json(game);
    } else {
      res.status(404).json({ error: "Game not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateGame = async (req, res) => {
  try {
    const { name, description, genre, platform } = req.body;
    const game = await Game.findByPk(req.params.id);
    if (game) {
      await game.update({ name, description, genre, platform });
      res.status(200).json(game);
    } else {
      res.status(404).json({ error: "Game not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteGame = async (req, res) => {
  try {
    const game = await Game.findByPk(req.params.id);
    if (game) {
      await game.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Game not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

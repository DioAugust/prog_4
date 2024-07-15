const express = require("express");
const router = express.Router();

const logRegister = require("../middlewares/logRegister.js");
const errorHandler = require("../middlewares/errorHandler.js");
const gameController = require("../controllers/gameController");

router.use(logRegister());

router.post("/game", gameController.createGame);
router.get("/game/:id", gameController.getGameById);
router.put("/game/:id", gameController.updateGame);
router.delete("/game/:id", gameController.deleteGame);
router.use(errorHandler());

module.exports = router;

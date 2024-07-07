const express = require("express");
const router = express.Router();

const logRegister = require("../middlewares/logRegister.js");
const mainController = require("../controllers/mainController.js");

router.use(logRegister());

router.get("/", mainController.helloWorld);

module.exports = router;

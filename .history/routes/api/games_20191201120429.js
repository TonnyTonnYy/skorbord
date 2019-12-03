const express = require("express");
const router = express.Router();

const Game = require("../../models/game");
const Player = require("../../models/player");

router.get("/", (req, res) => {
  Game.find().then(games => res.json(games));
});

module.exports = router;

const express = require("express");
const router = express.Router();

const Game = require("../../models/game");
const Player = require("../../models/player");

router.get("/", (req, res) => {
  Game.find().then(games => res.json(games));
});

router.post("/", (req, res) => {
  const filter = req.body.id;
  const update = { teams: req.body.teams };

  Game.findOneAndUpdate(filter, update).then(game => res.json(game));
});

module.exports = router;

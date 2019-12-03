const express = require("express");
const router = express.Router();

const Game = require("../../models/game");
const Player = require("../../models/player");

router.get("/", (req, res) => {
  console.log("odczyt");
  Game.find().then(games => res.json(games));
});

router.post("/", (req, res) => {
  const filter = { _id: req.body.id };
  const update = { teams: req.body.teams };
  console.log(req.body);
  Game.find(filter).then(game => res.json(game));
});

module.exports = router;

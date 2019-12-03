const express = require("express");
const router = express.Router();

const Game = require("../../models/game");
const Player = require("../../models/player");

router.get("/", (req, res) => {
  Game.find().then(games => res.json(games));
});

router.post("/", (req, res) => {
  const id = req.body._id;
  const newGame = new Game({
    category: req.body.category,
    teams: [
      {
        side: "left",
        name: req.body.teams[0].name,
        score: 0,
        fouls: 0,
        players: [],
        history: []
      },
      {
        side: "right",
        name: req.body.teams[1].name,
        score: 0,
        fouls: 0,
        players: [],
        history: []
      }
    ]
  });

  newGame.save().then(game => res.json(game));
});

module.exports = router;

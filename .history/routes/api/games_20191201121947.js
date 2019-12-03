const express = require("express");
const router = express.Router();

const Game = require("../../models/game");
const Player = require("../../models/player");

router.get("/", (req, res) => {
  Game.find().then(games => res.json(games));
});

router.post("/", (req, res) => {
  const newGame = new Game({
    category: "Senior",
    teams: [
      {
        side: "left",
        name: "Trampolina",
        score: 0,
        fouls: 0,
        players: [],
        history: []
      },
      {
        side: "right",
        name: "Dziki",
        score: 0,
        fouls: 0,
        players: [],
        history: []
      }
    ]
  });
});

module.exports = router;

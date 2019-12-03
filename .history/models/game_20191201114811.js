const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  category: String,
  teams: [
    {
      side: String,
      name: String,
      score: Number,
      fouls: 0,
      players: [
        {
          num: 1,
          name: "Antek",
          points: 0,
          assists: 0,
          rebounds: 0,
          fouls: 0
        }
      ],
      history: []
    }
  ]
});

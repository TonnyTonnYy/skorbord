const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  category: String,
  teams: [
    {
      side: String,
      name: String,
      score: Number,
      fouls: Number,
      players: [
        {
          num: Number,
          name: String,
          points: Number,
          assists: Number,
          rebounds: Number,
          fouls: Number
        }
      ],
      history: []
    }
  ]
});

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
      players: [],
      history: []
    }
  ]
});

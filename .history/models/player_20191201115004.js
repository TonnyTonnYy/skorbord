const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  num: 10,
  name: "Antek",
  points: 0,
  assists: 0,
  rebounds: 0,
  fouls: 0
});

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  num: Number,
  name: String,
  points: Number,
  assists: Number,
  rebounds: Number,
  fouls: Number
});

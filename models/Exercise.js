const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  title: String,
  name: String,
  distance: Number,
  duration: Number,
  weight: Number,
  sets: Number,
  reps: Number
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
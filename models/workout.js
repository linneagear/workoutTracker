// Exporting an object containing all of our models

const mongoose = require("mongoose")

const Schema = mongoose.Schema;

// this will create the collection/schema to the database
// matches the seed.js layout
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [{
    type: {
      type: String,
      trim: true,
      required: "Enter your workout type."
    },
    name: {
      type: String,
      trim: true,
      required: "Enter your workout name."
    },
    duration: {
      type: Number,
      required: "Enter the duration in minutes."
    },
    distance: {
      type: Number,
      required: "Enter the distance in miles."
    },
    weight: {
      type: Number,
      required: "Enter the weight in lbs."
    },
    sets: {
      type: Number,
      required: "Enter the number of sets."
    },
    reps: {
      type: Number,
      required: "Enter the number of reps."
    }
  }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
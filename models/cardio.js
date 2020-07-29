// must require mongoose
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// grabbed matching values from exercise.html
const cardioSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter the name of exercise"
  },
  value: {
    type: Number,
    required: "Enter the weight in lbs."
  },
  value: {
    type: Number,
    required: "Enter the number of sets"
  },
  value: {
    type: Number,
    required: "Enter the number of reps"
  },
  value: {
    type: Number,
    required: "Enter the duration in minutes"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Cardio = mongoose.model("Cardio", cardioSchema);

// export the schema
module.exports = Cardio;
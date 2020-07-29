// must require mongoose
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resistanceSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter the name of exercise"
  },
  value: {
    type: Number,
    required: "Enter the distance in miles"
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

const Resistance = mongoose.model("Resistance", resistanceSchema);

// export the schema
module.exports = Resistance;

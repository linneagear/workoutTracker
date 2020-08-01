const mongoose = require("mongoose")

const Schema = mongoose.Schema;

// this will create the collection/schema to the database
// matches the seed.js layout
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: Schema.Types.ObjectId,
        ref: "Exercise"
      }
    }
  ],
  totalDuration: {
    type: Number,
    default: 0
  }
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
// require express and mongoose
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// set up the port and express app
const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(require("./routes/api.js"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set up static files
app.use(express.static("public"));

// connect to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

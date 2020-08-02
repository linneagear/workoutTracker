// const router = require("express").Router();
const Workout = require("../models/Workout")

//// **** API ROUTES **** ////

module.exports = function (app) {
// get all workout data
app.get("/api/workouts", (req, res) => {
    Workout.find({}).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

// update by ID, using MongoDB documentation
app.put("/api/workouts/:id", ({ body, params }, res) => {

    // updates one document, at this id, with these new updates
    Workout.findByIdAndUpdate(params.id, 
        {   
            $inc: { totalDuration: body.duration },
            $push: { exercises: body} 
        },
        // set new: true to return the UPDATED document
        { new: true }
    )
    .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

// post any new workouts by using post and create(body)
app.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err)
    });
});

// get range of workouts for the stats page
app.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err);
    });
});

};
// export the router so it can be used
// module.exports = router;
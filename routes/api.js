const router = require("express").Router();
const Workout = require("../models/workout.js");
const path = require("path")

// ***** HTML ROUTES*****//

// displays whatever page is called to that route
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'exercise.html'));
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'stats.html'));
});

// **** API ROUTES **** // 

// get the workouts data
router.get("/api/workouts", (req, res) => {
    Workout.find({})
    // sort by last known date, and limit to one day
    .sort({ date: -1})
    .limit(1)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

// get range of workouts
router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err);
    });
});

// post any new workouts by using post and create
router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err)
    });
});

// update by ID, using MongoDB documentation
router.put("/api/workouts/:id", (req, res) => {
    // we only want to update ONE document, at this id, with these new updates
    Workout.updateOne( {_id: req.params.id}, {$push: {
        exercises: [
            type = req.body.type,
            name= req.body.name,
            duration= req.body.duration,
            distance= req.body.distance,
            weight= req.body.weight,
            sets= req.body.sets,
            reps= req.body.reps
        ]
    }
    })
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err)
    });
});

// export the router so it can be used
module.exports = router;
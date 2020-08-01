const router = require("express").Router();
const db = require("../models")
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


//// **** API ROUTES **** ////

// get all workout data
router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    // sort by last known date, and limit to one day
    // .sort({ date: -1})
    // .limit(1)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});


// update by ID, using MongoDB documentation
router.put("/api/workouts/:id", ({ body, params }, res) => {
    // updates one document, at this id, with these new updates
    db.Workout.findOneAndUpdate( 
        // id of item to find
        {_id: params.id},
        // changes to be made. Combine existing body with this change
        {$push: { exercises: body }},
        // return the updated version, instead of the pre-updated one
        // "runValidators" ensures new exercies meet requirements
        { new: true, runValidators: true}
    )
    .then(dbWorkout => {
        res.json(dbWorkout)
        console.log(exercises)
    })
    .catch(err => {
        res.json(err)
    });
});

// post any new workouts by using post and create
router.post("/api/workouts", (req, res) => {
    db.Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err)
    });
});

// get range of workouts
router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err);
    });
});

// export the router so it can be used
module.exports = router;
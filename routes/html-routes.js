const router = require("express").Router();
const path = require("path")

// ***** HTML ROUTES*****//

// displays home page
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// displays exercise page
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'exercise.html'));
});

// displays stats page
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'stats.html'));
});

// export the router so it can be used elsewhere
module.exports = router;
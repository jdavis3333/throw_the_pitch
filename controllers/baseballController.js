var express = require("express");

var router = express.Router();

// Import the model (baseball.js) to use its database functions.
var pitch = require("../models/baseball.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  pitch.selectAll(function (data) {
    var hbsObject = {
      pitches: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/pitches", function (req, res) {
  pitch.insertOne(["pitch_type", "thrown"], [req.body.pitch_type, req.body.thrown], function (result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/ball/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  pitch.updateOne(
    {
      thrown: req.body.thrown
    },
    condition,
    function (result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// Export routes for server.js to use.
module.exports = router;

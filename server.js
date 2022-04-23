const express = require("express");
// const events = require("./data.json");
const events = require("./data.js");

const app = express();

// @route GET api/events
// @desc Get all events
// @access Public
app.get("/api/events", (req, res) => {
  // res.send(events);
  res.status(200).send(JSON.stringify(events));
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server started on port ${port}.`));

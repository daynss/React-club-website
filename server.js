const express = require("express");
const events = require("./data.js");
const path = require("path");

const app = express();

// @route GET api/events
// @desc Get all events
// @access Public
app.get("/api/events", (req, res) => {
  res.status(200).send(JSON.stringify(events));
});

// Serve static assets
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server started on port ${port}.`));

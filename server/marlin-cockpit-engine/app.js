const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 5200;
const fs = require("fs");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log("Server spinning on port " + port);
});

// Test Link
app.get("/", (req, res, next) => {
  res.json({ code: "OK", message: "Hello from Marlin Cockpit Engine" });
});

// build
app.post("/build", (req, res, next) => {
  console.log(req.body);
  res.json({ code: "OK", message: "Hello from Marlin Cockpit Engine" });
  writeFile(req.body);
});

/**
 * Method to write the config file
 * @param {*} payload
 */
let writeFile = (payload) => {
  const stream = fs.createWriteStream("./" + payload.id);
  stream.write("#define CONFIGURATION_H_VERSION " + payload.version);
};

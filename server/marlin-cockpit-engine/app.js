const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 5200;
const fs = require("fs");
const constants = require("./lib/common.constant");

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

// Board List
app.get("/boardsList", (req, res, next) => {
  let configVersion = req.query.version;
  res.json({
    code: "OK",
    message: "Aahaa! Crispy list of boards",
    data: {
      boards: constants.boards[configVersion],
      configuration_version: configVersion,
    },
  });
});

// Thermal Sensor List
app.get("/thermalSensorCodeList", (req, res, next) => {
  let configVersion = req.query.version;
  res.json({
    code: "OK",
    message: "Aahaa! Crispy list of sensor code",
    data: {
      boards: constants.thermal_sensors[configVersion],
      configuration_version: configVersion,
    },
  });
});

/**
 * Method to write the config file
 * @param {*} payload
 */
let writeFile = (payload) => {
  const stream = fs.createWriteStream("./" + payload.id);
  stream.write("#define CONFIGURATION_H_VERSION " + payload.version);
};

const express = require("express");
var bodyParser = require("body-parser");
let locationsrouter = require("./routes/locationrouter.js");
const { body, validationResult } = require("express-validator");

const app = express();
const port = process.env.PORT || 8080;
// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// lukee http request bodyn ja muuttaa sen javascript olioksi
// ja laittaa sen req.body muuttujaan
app.use(express.json());

app.use(express.static("public"));
app.use(urlencodedParser);

const validate = loc => {
  // console.log(JSON.stringify(loc, null, 4));
  //console.log(loc.longitude); // -180 to 80
  //console.log(loc.latitude); // -90 to 90
  let virheita = 0;
  if (loc.longitude > 80 || loc.longitude < -180) {
    virheita++;
    console.log("longitude vaarin");
  }
  if (loc.latitude > 90 || loc.latitude < -90) {
    virheita++;
    console.log("latitude vaarin");
  }
  if (virheita) {
    return false;
  } else {
    return true;
  }
};

app.use((req, res, next) => {
  if (req.method == "POST") {
    if (validate(req.body)) {
      next();
    } else {
      res.sendStatus = 400;
      res.end();
    }
  } else {
    console.log(req.method);
  }
  next();
});

app.use("/api/locations", locationsrouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

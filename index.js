const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const port = process.env.PORT || 8080;
// test
app.use(express.static("public"));
app.engine("html", require("ejs").renderFile);

app.get("/hei", (req, res) => {
  res.send("heipparallaa");
});

app.get("/api/locations", (req, res) => {
  let database = [
    { id: 1, latitude: 60, longitude: 70 },
    { id: 2, latitude: 40, longitude: 80 },
  ];
  app.set("json spaces", "\t"); // number of spaces for indentation

  database2 = JSON.stringify(database);
  database = JSON.stringify(database, null, "\t");

  res.render(path.join(__dirname + "/public/index.html"), {
    database,
    database2,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

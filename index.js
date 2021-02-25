const express = require("express");
const app = express();

const port = process.env.PORT || 8080;
// test
app.use(express.static("public"));

app.get("/hei", (req, res) => {
  res.send("heipparallaa");
});

app.get("/api/locations", (req, res) => {
  var jsonStr = '{ "bool": true, "number": 123, "string": "foo bar" }';
  app.set("json spaces", 4); // number of spaces for indentation
  res.json(jsonStr);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const express = require("express");
const app = express();

const port = process.env.PORT || 8080;
// test
app.use(express.static("public"));

app.get("/hei", (req, res) => {
  res.send("heipparallaa");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

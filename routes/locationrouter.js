const express = require("express");

const database = require("../database/crudrepository.js");

//                devaaja A              devaaja b
// index.js ---> locationsrouter -----> cruddatabase ----> taulukko

let locationsrouter = express.Router();

// http://localhost:8080/api/locations/
locationsrouter.get("/", (req, res) => {
  res.send(database.findAll());
});

// http://localhost:8080/api/locations/99
locationsrouter.get("/:id([0-9]+)", (req, res) => {
  let item = database.findById(Number(req.params.id));
  if (item == undefined) {
    res.statusCode = 404;
    res.end();
  } else {
    res.send(item); // res.send(db[1])
  }
});

// http://localhost:8080/api/locations/99
locationsrouter.delete("/:id([0-9]+)", (req, res) => {
  let success = database.deleteById(Number(req.params.id));
  if (success) {
    res.statusCode = 204;
  } else {
    res.statusCode = 404;
  }
  res.end();
});

locationsrouter.post("/", (req, res) => {
  let location = database.save(req.body);
  res.statusCode = 201;
  res.send(location);
});

module.exports = locationsrouter;

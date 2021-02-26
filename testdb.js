const mysql = require("mysql");

const config = require("./database/dbconfig.js");
const connection = mysql.createConnection(config);

// You may omit this
connection.connect();

connection.query("select * from locations", (err, locations) => {
  if (err) {
    throw err;
  }
  locations.forEach(loc => console.log(loc));
});

// will wait if previously enqueued queries
connection.end();

var db = require('mysql');
var config = require('../config.js');

var connection = db.createConnection({
  host: 'localhost',
  port: 3306,
  user: config.user,
  password: config.password,
  database: 'manager'
});

connection.connect(function(err) {
  if (err) console.log(err);
  console.log("database running");
})

module.exports = connection;

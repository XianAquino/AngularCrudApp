var express = require('express');
var path = require('path');
var app = express();
var port = 3033;
var async = require('async');
var employees = require('./models/employees.js');

var getEmployees = function(callback) {
  employees.getAll(null, function(err, managers) {
      async.forEach(managers, function(manager, callback) {
        employees.getAll(manager.ID, function(err, subordinates) {
            manager.subordinates = subordinates;
            callback();
        });
      }, function(err) {
        callback(managers);
      });
  });
}

app.get('/employees', function(req, res) {
  getEmployees(function(employees) {
    res.json(employees);
  })
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname +  '/../client/index.html'));
});

app.listen(port, function() {
  console.log('Server Listening to port: ' + 3033);
});

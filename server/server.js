var express = require('express');
var path = require('path');
var app = express();
var port = 3033;
var async = require('async');
var employees = require('./models/employees.js');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/bower_components', express.static(path.join(__dirname + '/../bower_components')));
app.use('/js', express.static(path.join(__dirname + '/../client/js')));
app.use('/templates', express.static(path.join(__dirname + '/../client/templates')));


// // non-recursive solution ------------------
// var getEmployees = function(callback) {
//   employees.getAll(null, function(err, managers) {
//     async.forEach(managers, function(manager, callback) {
//       employees.getAll(manager.ID, function(err, subordinates) {
//         manager.subordinates = subordinates;
//         callback();
//       });
//     }, function(err) {
//       callback(managers);
//     });
//   });
// };
// //------------------------------------------

var getEmployees = function(callback) {
  employees.getAll(null, function(err, managers) {
    getSubordinates(managers, callback);
  });
};

var getSubordinates = function(managers, callback) {
  async.forEach(managers, function(manager, callback) {
    employees.getAll(manager.ID, function(err, subordinates) {
      manager.subordinates = subordinates;
      if(subordinates.length) {
        getSubordinates(subordinates, callback)
      } else {
        callback();
      }
    });
  }, function(err) {
    callback(managers);
  });
}

app.get('/employees', function(req, res) {
  getEmployees(function(employees) {
    res.json(employees);
  });
});

app.post('/employees', function(req, res) {
  employees.add(req.body, function(err, empId) {
    res.json({ID: empId});
  });
});

app.delete('/employees/:empId', function(req, res) {
  employees.remove(req.params.empId, function(err, result) {
    res.sendStatus(200);
  })
})

app.get('/*', function(req, res) {
  res.sendFile(path.resolve(__dirname +  '/../client/index.html'));
});

app.listen(port, function() {
  console.log('Server Listening to port: ' + 3033);
});

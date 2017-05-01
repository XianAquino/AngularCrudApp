var db = require('../db');

module.exports = {
  getAll: function(managerId, callback) {
    const condition = managerId ? '= ?' : 'IS NULL'
    db.query(`SELECT * FROM employees WHERE MANAGER ${condition}` , [managerId], function(err, results) {
      callback(err, results);
    });
  },
  add: function(employee, callback) {
    db.query('INSERT INTO employees SET ?', employee, function(err, res) {
      callback(err, res.insertId);
    })
  },
  update: function(id, values, callback) {
    db.query('UPDATE employees SET ? WHERE id = ?', [values, id], function(err, res){
      callback(err, res);
    })
  },
  remove: function(employeeId, callback) {
    db.query('DELETE FROM employees WHERE ID = ?', employeeId, function(err, res) {
      callback(err, res);
    })
  }
};


var connection = require("../config/connection.js");

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, value, cb) {
    // var queryString = "INSERT INTO " + table + " (" + column + ") VALUES ?";
    var queryString = "INSERT INTO " + table + " SET ?";
    connection.query(queryString, value, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  
  updateOne: function(table, condition, id, cb) {
    var queryString = "UPDATE " + table + " SET " + condition + " WHERE id = ?";
    connection.query(queryString, id, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;
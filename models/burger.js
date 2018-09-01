// Import the ORM to implement functions that will interact with the database
var orm = require('../config/orm.js');

// Create the burger object
var burger = {
  // Select all burger table entries
  selectAll: function(callback) {
    orm.selectAll('burgers', function(res) {
      callback(res);
    });
  },

  // The variables cols and vals are arrays
  insertOne: function(cols, vals, callback) {
    orm.insertOne('burgers', cols, vals, function(res) {
      callback(res);
    });
  },

  // The objColVals is an object specifying columns as object keys with associated values
  updateOne: function(objColVals, condition, callback) {
    orm.updateOne('burgers', objColVals, condition, function(res) {
      callback(res);
    });
  }
};

// Export the database functions for the controller (burgerController.js).
module.exports = burger;
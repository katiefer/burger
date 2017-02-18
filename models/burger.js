
// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {

//SelectAll
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

//Insert
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

//Update
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgers_controllers.js).
module.exports = burger;
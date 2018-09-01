// Import the MySQL connection object
var connection = require ('./connection.js');

// Helper function for generating MySQL syntax
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Helper function for generating My SQL syntax
function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        arr.push(key + "=" + ob[key]);
    }

    return arr.toString();
}

// Create the ORM object to perform SQL queries
var orm = {
    // Function that returns all table entries
    selectAll: function(tableInput, callback) {
        // Construct the query string that returns all rows from the target table
        var queryString = "SELECT * FROM " + tableInput + ";";

        // Perform the database query
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            // Return results in callback
            callback(result);
        });
    },

    // Function that insert a single table entry
    insertOne: function(table, cols, vals, callback) {
        // Construct the query string that inserts a single row into the target table
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        // console.log(queryString);

        // Perform the database query
        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }

            // Return results in callback
            callback(result);
        });
    },

    // Function that updates a single table entry
    updateOne: function(table, objColVals, condition, callback) {
        // Construct the query string that updates a single entry in the target table
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        // console.log(queryString);

        // Perform the database query
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            // Return results in callback
            callback(result);
        });
    }
};

// Export the orm object for use in other modules
module.exports = orm;






// var connection = require("./connection.js");

// var orm = {
//     selectAll: function (callback) {
//         orm.selectAll('burgers', function(res) {
//             callback(res);
//         });
//     },

//     insertOne: function (col, val, callback) {
//         orm.insertOne('burgers', col, val, function(res) {
//             callback(res);
//         });
//     },

//     updateOne: function (object, condition, callback) {
//         orm.updateOne('burgers', object, condition, callback, function(res) {
//             callback(res);
//         });
//     },
// };

// module.exports = orm;

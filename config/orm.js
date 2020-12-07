const connection = require("./connection.js");
const mysql = require("mysql");

// // HELPER FUNCTION TAKEN FROM EXERCISE 16
// function objToSql(ob) {
//   let arr = [];

//   // loop through the keys and push the key/value as a string int arr
//   for (let key in ob) {
//     let value = ob[key];
//     // check to skip hidden properties
//     if (Object.hasOwnProperty.call(ob, key)) {
//       // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
//       if (typeof value === "string" && value.indexOf(" ") >= 0) {
//         value = "'" + value + "'";
//       }
//       // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
//       // e.g. {sleepy: true} => ["sleepy=true"]
//       arr.push(key + "=" + value);
//     }
//   }

//   // translate array of strings to a single comma-separated string
//   return arr.toString();
// }

// function printQuestionMarks(num) {
//   let arr = [];

//   for (let i = 0; i < num; i++) {
//     arr.push("?");
//   }

//   return arr.toString();
// }

let orm = {
    selectAll: function(tableInput, cb) {
        let queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            
            cb(res);
        });
    },

    insertOne: function(table, columns, values, cb) {
        let queryString = `INSERT INTO ${table}`;

        queryString += " (";
        queryString += columns.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(values.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, function(err, res) {
            if (err) throw err;

            cb(res);
        });
    },

    updateOne: function(table, values, condition, cb) {
        let queryString = `UPDATE ${table}`;

        queryString += " SET ";
        queryString += objToSql(values);
        queryString += " WHERE ";
        queryString += condition;
        
        console.log(queryString);

        connection.query(queryString, function(err, res) {
            if (err) throw err;

            cb(res);
        });
    }
};





module.exports = orm;
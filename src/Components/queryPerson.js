// Filename - index.js

// Importing module
const mysql = require('mysql')

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "mydb"
})

// Connecting to database
conn.connect(function(err) {
    if (err) throw err;
    conn.query("SELECT * FROM PERSON", function (err, results, fields) {
      if (err) throw err;
      console.log(`  ID\tFirst\tLast`);
      for (let row of results) {
        console.log(`${row.PersonID}\t${row.FirstName}\t${row.LastName}`);
      } 
      //console.log(results);
    });
});
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
conn.connect(function (err) {
    if (err) {
        console.log("connection failed");
        console.log(err);
        return;
    }
    conn.query(`SHOW DATABASES`,
        function (err, result) {
            if (err)
                console.log(`Error executing the query - ${err}`)
            else
                console.log("Result: ", result)
    })
})
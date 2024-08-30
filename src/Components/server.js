const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

// Create a connection pool to the MySQL database
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'user_management',
    password: 'yourpassword'
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/users', (req, res) => {
    pool.query('SELECT * FROM users', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

app.post('/users', (req, res) => {
    const { name, email } = req.body;
    pool.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: results.insertId, name, email });
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});






/* server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(bodyParser.json());
app.use(cors());
 
app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Example endpoint to add a user
app.post('/users', (req, res) => {
    const { name, email, password } = req.body;
    const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(sql, [name, email, password], (err, results) => {
        if (err) throw err;
        res.json({ id: results.insertId });
    });
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
*/
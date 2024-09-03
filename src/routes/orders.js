const express = require('express');
const router = express.Router();

module.exports = (dbConnection) => {
    // Get all orders
    router.get('/', (req, res) => {
        dbConnection.query('SELECT * FROM orders', (err, results) => {
            if (err) return res.status(500).send(err);
            res.json(results);
        });
    });

    // Get orders by user ID
    router.get('/user/:userId', (req, res) => {
        const { userId } = req.params;
        dbConnection.query('SELECT * FROM orders WHERE user_id = ?', [userId], (err, results) => {
            if (err) return res.status(500).send(err);
            res.json(results);
        });
    });

    // Create a new order
    router.post('/', (req, res) => {
        const { user_id, amount } = req.body;
        dbConnection.query('INSERT INTO orders (user_id, amount) VALUES (?, ?)', 
        [user_id, amount], (err, results) => {
            if (err) return res.status(500).send(err);
            res.status(201).json({ id: results.insertId, user_id, amount });
        });
    });

    return router;
};

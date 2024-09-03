const express = require('express');
const router = express.Router();

module.exports = (dbConnection) => {
    // Get all users
    router.get('/', (req, res) => {
        dbConnection.query('SELECT * FROM users', (err, results) => {
            if (err) return res.status(500).send(err);
            res.json(results);
        });
    });

    // Get a user by ID
    router.get('/:id', (req, res) => {
        const { id } = req.params;
        dbConnection.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
            if (err) return res.status(500).send(err);
            if (results.length === 0) return res.status(404).send('User not found');
            res.json(results[0]);
        });
    });

    // Create a new user
    router.post('/', (req, res) => {
        const { username, password, email } = req.body;
        dbConnection.query('INSERT INTO users (username, password, email) VALUES (?, ?, ?)', 
        [username, password, email], (err, results) => {
            if (err) return res.status(500).send(err);
            res.status(201).json({ id: results.insertId, username, email });
        });
    });

    return router;
};








/*import express from 'express';
import mysql from 'mysql2';
//localhost:3000/users
const router = express.Router()
// connecting Database
const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb"
});

  /*************************************************************************
   * INSERT (POST)
   ************************************************************************
  router.post("/", async (req, res) => {
    console.log('/users/ post called')
    try {
      const { name, address, country } = req.body;
      const [{ insertId }] = await connection.promise().query(
        `INSERT INTO users (name, address, country) 
            VALUES (?, ?,?)`,
        [name, address, country]
      );
      res.status(202).json({
        message: "User Created",
      });
    } catch (err) {
      res.status(500).json({
        message: err,
      });
    }
});
/*************************************************************************
 * QUERY (GET)
 ************************************************************************
router.get("/", async (req, res) => {
  console.log('/users/ get called')

    try {
        const data =  await connection.promise().query(
          `SELECT *  from users;`
        );
        res.status(202).json({  // res.send(data)
          users: data[0]
        });
      } catch (err) {
        res.status(500).json({
          message: err
        });
      }
});
/*************************************************************************
 * QUERY BY ID (GET)
 ************************************************************************
router.get("/:id", async(req, res) => {
  console.log('/users/:id get called')
    try {
        const {id} = req.params
        const data = await connection.promise().query(
          `SELECT *  from users where id = ?`,[id]
        );
        res.status(200).json({
          user: data[0][0]
        });
      } catch (err) {
        res.status(500).json({
          message: err
        });
      }
});
/*************************************************************************
 * UPDATE (PATCH)
 ************************************************************************
router.patch("/:id", async (req, res) => {
  console.log('/users/:id patch called')
    try {
      const { id } = req.params;
      const { name, address, country } = req.body;
      const update = await connection
        .promise()
        .query(
          `UPDATE users set name = ?, address = ?, country = ? where id = ?`,
          [ name, address, country,id]
        );
      res.status(200).json({
        message: "updated",
      });
    } catch (err) {
      res.status(500).json({
        message: err,
      });
    }
  });
/*************************************************************************
 * DELETE (DELETE)
 ************************************************************************
router.delete("/:id", async (req, res) => {
  console.log('/users/:id delete called')

    try {
      const { id } = req.params;
      const update = await connection
        .promise()
        .query(
          `DELETE FROM  users where id = ?`,
          [id]
        );
      res.status(200).json({
        message: "deleted",
      });
    } catch (err) {
      res.status(500).json({
        message: err,
      });
    }
});
export default router;
*/
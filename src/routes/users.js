import express from 'express';
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
   *************************************************************************/
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
 *************************************************************************/
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
 *************************************************************************/
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
 *************************************************************************/
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
 *************************************************************************/
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

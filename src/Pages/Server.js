const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'project_db'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected...');
});

// Get categories
app.get('/categories', (req, res) => {
  db.query('SELECT * FROM categories', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get questions by category
app.get('/questions/:categoryId', (req, res) => {
  const { categoryId } = req.params;
  db.query('SELECT * FROM questions WHERE category_id = ?', [categoryId], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Add a question
app.post('/questions', (req, res) => {
  const { category_id, text, date, answer } = req.body;
  db.query('INSERT INTO questions (category_id, text, date, answer) VALUES (?, ?, ?, ?)', [category_id, text, date, answer], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId });
  });
});

// Delete a question
app.delete('/questions/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM questions WHERE id = ?', [id], (err, result) => {
    if (err) throw err;
    res.json({ affectedRows: result.affectedRows });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

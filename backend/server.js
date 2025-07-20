
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'cse123', // Your MySQL password
  database: 'furniture_db'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL Database');
});

// Get all products
app.get('/api/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Place an order
app.post('/api/order', (req, res) => {
  const { customer_name, total } = req.body;

  if (!customer_name || !total) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  db.query('INSERT INTO orders (customer_name, total) VALUES (?, ?)', [customer_name, total], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Order placed successfully', orderId: result.insertId });
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});


// db.js
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'cse123', // your DB password if any
  database: 'furniture_store' // make sure this DB exists
});

connection.connect((err) => {
  if (err) {
    console.error('❌ MySQL connection failed:', err.message);
  } else {
    console.log('✅ MySQL connected successfully.');
  }
});

module.exports = connection;

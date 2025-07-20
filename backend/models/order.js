const db = require('../db');

const Order = {
  place: (customer_name, total, callback) => {
    db.query('INSERT INTO orders (customer_name, total) VALUES (?, ?)', [customer_name, total], callback);
  }
};

module.exports = Order;

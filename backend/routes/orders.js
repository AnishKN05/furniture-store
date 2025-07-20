const express = require('express');
const router = express.Router();
const Order = require('../models/order');

router.post('/', (req, res) => {
  const { customer_name, total } = req.body;
  Order.place(customer_name, total, (err) => {
    if (err) return res.status(500).send(err);
    res.send('Order placed!');
  });
});

module.exports = router;

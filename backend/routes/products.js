const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/', (req, res) => {
  Product.getAll((err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
  Product.getById(req.params.id, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result[0]);
  });
});

const products = [
  {
    id: 1,
    name: "Wooden Sofa",
    price: 7500,
    image: "images/sofa.jpg",
    description: "Comfortable 3-seater wooden sofa."
  },
  {
    id: 2,
    name: "Dining Table",
    price: 10500,
    image: "images/dining.jpg",
    description: "Stylish 4-seater dining table set."
  }

];


module.exports = router;

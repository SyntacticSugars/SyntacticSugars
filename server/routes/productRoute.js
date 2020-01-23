const express = require('express');

const productController = require('../controllers/productController');

const productRouter = express.Router();

productRouter.get('/:id', productController.getProduct, (req, res) => {
  res.status(200).json(res.locals);
});

module.exports = productRouter;

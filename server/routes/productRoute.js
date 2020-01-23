const express = require('express');

const productController = require('../controllers/productController');

const productRouter = express.Router();

productRouter.get('/:id', productController.getProduct, (req, res) => {
  res.status(200).json(res.locals);
});

productRouter.post('/post', productController.addProduct, (req, res) => {
  res.json("test completed");
});
module.exports = productRouter;

const express = require('express');

const xxxController = require('../controllers/xController');

const xxxRouter = express.Router();

xxxRouter.get('/', xxxController.middleware, (req, res) => {
  res.send('test');
});

xxxRouter.post('/post', xxxController.addProduct, (req, res) => {
  res.json("test completed");
});
module.exports = xxxRouter;

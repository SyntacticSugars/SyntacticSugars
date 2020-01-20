const express = require('express');

const xxxController = require('../controllers/xController');

const xxxRouter = express.Router();

xxxRouter.get('/', xxxController.middleware, (req, res) => {
  res.send('test');
});

module.exports = xxxRouter;

const express = require('express');

const feedController = require('../controllers/feedController');

const feedRouter = express.Router();

feedRouter.get('/:type', feedController.getfeed, (req, res) => {
  res.status(200).json(res.locals);
});

module.exports = feedRouter;

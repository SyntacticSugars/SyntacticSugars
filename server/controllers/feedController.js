const db = require('../models/bakeryModel.js');

const feedController = {};

feedController.getfeed = (req, res, next) => {
  console.log(req.params);
  db.query('SELECT products.*, users.company FROM products INNER JOIN users ON users._id=products.poster_id WHERE type=$1', [req.params.type], (err, feed) => {
    if (err) {
      console.log('err in get feed middleware');
      res.status(400);
      next(err);
    }
    console.log(feed.rows);
    res.locals.feed = feed.rows;
    return next();
  });
};
module.exports = feedController;

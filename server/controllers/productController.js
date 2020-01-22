const db = require('../models/bakeryModel.js');

const productController = {};

productController.getProduct = (req, res, next) => {
  db.query('SELECT * FROM products WHERE _id=$1', [req.params.id], (err, product) => {
    if (err) {
      console.log('err in get product middleware');
      res.status(400);
      next(err);
    }
    res.locals = product;
    return next();
  });
};

module.exports = productController;

const db = require('../models/bakeryModel.js');

const productController = {};

productController.getProduct = (req, res, next) => {
  console.log(req.params.id);
  db.query('SELECT * FROM products WHERE _id=$1', [req.params.id], (err, product) => {
    if (err) {
      console.log('err in get product middleware');
      res.status(400);
      next(err);
    }
    console.log(product);
    res.locals = product;
    return next();
  });
};

module.exports = productController;

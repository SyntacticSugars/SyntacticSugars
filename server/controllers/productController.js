const db = require('../models/bakeryModel.js');

const productController = {};

productController.getProduct = (req, res, next) => {
  console.log(req.params);
  db.query('SELECT * FROM products WHERE _id=$1', [req.params.id], (err, product) => {
    if (err) {
      console.log('err in get product middleware');
      res.status(400);
      next(err);
    }
    console.log(product.rows[0]);
    res.locals.product = product.rows[0];
    return next();
  });
};

productController.addProduct = (req, res, next) => {

  const queryString = `INSERT INTO products (poster_id, title, type, img_url, price, description, location, shiptime_days, note) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`;
  db.query(queryString, req.body, (err, result)=>{
    if (err) {
      next({log: err.stack, message: "Error executing query"}) 
    }
    res.status(200);
    return next();
  })

};
module.exports = productController;

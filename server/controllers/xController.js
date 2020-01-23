const xxxController = {};
const db = require('../models/bakeryModel')
xxxController.middleware = (req, res, next) => {
  res.status(200);
  return next();
};

xxxController.addProduct = (req, res, next) => {

  const queryString = `INSERT INTO products (poster_id, title, type, img_url, price, description, location, shiptime_days, note) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`;
  db.query(queryString, req.body, (err, result)=>{
    if (err) {
      next({log: err.stack, message: "Error executing query"}) 
    }
    res.status(200);
    return next();
  })

};

module.exports = xxxController;

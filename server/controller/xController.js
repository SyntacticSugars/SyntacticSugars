const xxxController = {};

xxxController.middleware = (req, res, next) => {
  res.status(200);
  return next();
};

module.exports = xxxController;

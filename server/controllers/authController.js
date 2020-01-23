
const authController = {};

authController.authCheck = (req, res, next) => {
  if (!req.user){
    //if user is not logged in
    res.redirect('/');
  } else {
    next();
  }
}





module.exports = authController;
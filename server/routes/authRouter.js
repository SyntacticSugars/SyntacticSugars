const express = require('express');
const passport = require('passport');
const authRouter = express.Router();


authRouter.get('/google', (req,res, next)=>{
  console.log("passport",passport.authenticate)
  next();
},
  passport.authenticate('google', { scope: 
      ['profile'] }
));

authRouter.get( '/google/callback', (req,res, next)=>{
  console.log("google called me back")
  next();
} ,passport.authenticate( 'google'), (req, res) => {
  res.redirect('/login');
});

module.exports = authRouter;

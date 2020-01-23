const express = require('express');
const passport = require('passport');
const authRouter = express.Router();


authRouter.get('/google',
  passport.authenticate('google', { scope: 
      ['profile'] }
));

authRouter.get( '/google/callback', passport.authenticate( 'google'), (req, res) => {
  res.redirect('/login');
});

module.exports = authRouter;

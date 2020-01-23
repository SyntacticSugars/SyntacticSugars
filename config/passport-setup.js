const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const passport = require('passport');
const User = require('../server/models/userModel.js');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  })
});

passport.use(new GoogleStrategy({
  clientID: keys.google.clientID,
  clientSecret: keys.google.clientSecret,
  callbackURL: "/auth/google/callback",
  passReqToCallback   : true
},
(req, accessToken, refreshToken, profile, done) => {
  //check if user already exists in db
  User.findOne({ googleId: profile.id }).then((currentUser) => {
    if(currentUser){
      console.log(currentUser);
      done(null, currentUser);
      //already have the user
    } else {
      new User({
        googleId: profile.id,
        username: profile.displayName,
        thumbnail: profile._json.picture
       }).save().then((newUser) => {
         console.log('new user created:' + newUser)
         done(null, newUser);
       })
    }
  })
  })
);
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const passport = require('passport');

passport.use(new GoogleStrategy({
  clientID: keys.google.clientID,
  clientSecret: keys.google.clientSecret,
  callbackURL: "/auth/google/callback",
  passReqToCallback   : true
},
(req, accessToken, refreshToken, profile, done) => {
  console.log('profile', profile)
  User.findOrCreate({ googleId: profile.id }, function (err, user) {
    return done(err, user);
  });
}
));
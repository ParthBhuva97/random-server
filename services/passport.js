const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const User = require("../models/User");


passport.use(
  new GoogleStrategy(
    {
      clientID: '132656659854-8qi4tdn53c07dgqdnak5a5f6783u1ond.apps.googleusercontent.com',
      clientSecret: keys.google.clientSecret,
      callbackURL: keys.google.callbackURL,
    },
    async (accessToken, refreshToken, profile, done) => {
      const { id, displayName } = profile;
      const user = await User.findOneAndUpdate(
        { googleId: id },
        { name: displayName },
        { upsert: true, new: true }
      );
      return done(null, user);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

module.exports = passport;

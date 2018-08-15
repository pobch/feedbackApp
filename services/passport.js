const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const keys = require('../config/keys')

const User = mongoose.model('users')

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id)
  done(null, user)
})

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true // Tell GoogleStrategy that Heroku's proxy is safe. So, don't automatically
                // turn domain's protocol from https to http. 
                // See 'Dev vs Prod Environments' > 'Fixing Heroku Proxy Issues' section of the course.
  }, async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({googleId: profile.id})  
    if (existingUser) {
      done(null, existingUser)
    } 
    // this user is not exist, so create a new record
    const user = await new User({googleId: profile.id}).save()
    done(null, user)
  }
))
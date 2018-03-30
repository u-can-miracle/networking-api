import passport from 'passport'
import { Strategy as fbStrategy } from 'passport-facebook'
import { Strategy as googleStrategy } from 'passport-google-oauth20'

import config from './config'

const { fbCallback, fbClientId, fbClientSecret } = config
const { googleCallback, googleClientId, googleSecret } = config

export default function passportStrategyConfiguration(app){
	passport.use(new fbStrategy({
		clientID: fbClientId,
		clientSecret: fbClientSecret,
		callbackURL: fbCallback
	}, function(accessToken, refreshToken, profile, cb) {
      return cb(null, { profile: profile })
  }))

	passport.use(new googleStrategy({
    clientID: googleClientId,
    clientSecret: googleSecret,
    callbackURL: googleCallback
  },
  function(accessToken, refreshToken, profile, cb) {
		return cb(null, { profile: profile })
  }
))

	passport.serializeUser(function(user, cb) {
		cb(null, user)
	})


	passport.deserializeUser(function(user, cb) {
		cb(null, user)
	})

	app.use(passport.initialize())
	app.use(passport.session())
}

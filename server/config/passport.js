import passport from 'passport'
import { Strategy as fbStrategy } from 'passport-facebook'

import config from './config'
import { createFbUser } from '../controllers/login/socLogin'

const { fbCallback, fbClientId, fbClientSecret } = config

export default function passportStrategyConfiguration(app){
	passport.use(new fbStrategy({
		clientID: fbClientId,
		clientSecret: fbClientSecret,
		callbackURL: fbCallback,
		profileFields: [
			'email', 'first_name','last_name',
			'location', 'picture.type(large)', 'link'
		]
	}, function(accessToken, refreshToken, profile, cb) {
			// 1)  get user email and usefull data
			// 2) pass usefull data to cb -> serialize
			console.log('FB profile', profile)
			const { id,
				name: { familyName, givenName },
				emails,
				photos,
				_json: { location },
				profileUrl
			} = profile

			const userInfo = {
				fbId: id,
				userName: `${familyName} ${givenName}`,
				email: emails[0].value,
				photo: photos[0].value,
				fbPage: profileUrl,
				location: location.name
			}

			return cb(null, userInfo)
  }))

	passport.serializeUser(function(user, cb) {
		console.log('user', user)
		createFbUser(user)
		// 1) save user data ctrl
			// - save to db
			// - save to tokenno99o
		cb(null, user)
	})


	passport.deserializeUser(function(user, cb) {
		console.log('deserializeUser ', user)

		cb(null, user)
	})

	app.use(passport.initialize())
	app.use(passport.session())
}

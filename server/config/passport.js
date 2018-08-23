import passport from 'passport'
import { Strategy as fbStrategy } from 'passport-facebook'

import config from './config'
import { handleFbUserData } from '../controllers/login/socLogin'
import { logger } from './errorHandling'

const { fbCallback, fbClientId, fbClientSecret } = config

export default function passportStrategyConfiguration(app){
	passport.use(new fbStrategy({
		clientID: fbClientId,
		clientSecret: fbClientSecret,
		callbackURL: fbCallback,
		profileFields: [
		'id', 
		'address', 
		'hometown',
		'email', 
		'photos',
//		'birthday', 
//		'friends',
		'first_name', 
		'last_name', 
//		'middle_name', 
//		'gender',
		'user_location',
		'location',
		 'link'
		]
		/*profileFields: [
			'emails', 'id', 'first_name','last_name',
			'location', 'picture.type(large)', 'link'
		]*/
	}, async (accessToken, refreshToken, profile, cb) => {
			// 1)  get user email and usefull data
			// 2) pass usefull data to cb -> serialize
console.log('profile',profile)
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

			try {
				const user = await handleFbUserData(userInfo)

				return cb(null, user)
			} catch (err) {
				const time = new Date().getTime()
				logger.error({ time, err }, 'fb login error')
				return cb(null, false)
			}
  }))

	passport.serializeUser((user, cb) => {
		console.log('serializeUser')
		cb(null, user)
	})


	passport.deserializeUser((user, cb) => {
		console.log('deserializeUser')
		cb(null, user)
	})

	app.use(passport.initialize())
	app.use(passport.session())
}

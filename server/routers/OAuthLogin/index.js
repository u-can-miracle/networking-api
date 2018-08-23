import express from 'express'
import passport from 'passport'

import getHtmlForFbAuth from '../../controllers/getHtml/getHtmlForFbAuth'

const loginRouter = express.Router()

loginRouter.get('/auth/facebook',
	passport.authenticate('facebook', {
		scope: ['email', 'public_profile'],
		failureRedirect: '/login',
//		scope: ['address']
	}),
	(req, res) => {
		res.redirect('/')
	}
)

loginRouter.get('/auth/fb/callback',
	passport.authenticate('facebook', {
		failureRedirect: '/login'
	}),
	async (req, res, next) => {
		try {
			const html = await getHtmlForFbAuth(req.user.id, req.headers['user-agent'], res)

			res.send(html)
		} catch (err) {
			next(err)
		}
	}
)

export default loginRouter

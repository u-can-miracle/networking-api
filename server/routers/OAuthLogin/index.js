import express from 'express'
import passport from 'passport'

import getHtmlForFbAuth from '../../controllers/getHtml/getHtmlForFbAuth'

const loginRouter = express.Router()

loginRouter.get('/auth/facebook',
	(req, res, next) => {
		console.log('/auth/facebook mw 1')
		next()
	},
	passport.authenticate('facebook', {
		failureRedirect: '/login'
	}),
	(req, res) => {
		// res.redirect('/')
		res.json({ data: 'data' })
	}
)

loginRouter.get('/auth/fb/callback',
	passport.authenticate('facebook', {
		failureRedirect: '/login'
	}),
	async (req, res) => {
		const html = await getHtmlForFbAuth(req.user.id, req.headers['user-agent'], res)
		// res.redirect('/main')
		res.send(html)
	}
)

export default loginRouter

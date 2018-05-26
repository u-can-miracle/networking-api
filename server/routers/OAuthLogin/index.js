import express from 'express'
import passport from 'passport'

import getHtmlForFbAuth from '../../controllers/getHtml/getHtmlForFbAuth'

const loginRouter = express.Router()

loginRouter.get('/auth/facebook',
	passport.authenticate('facebook'),
	(req, res) => {
		res.redirect('/')
	}
)

loginRouter.get('/main',
	passport.authenticate('facebook', {
		failureRedirect: '/'
	}),
	async (req, res) => {
		const html = await getHtmlForFbAuth(req.user.id, req.headers['user-agent'], res)
		// res.redirect('/main')
		res.send(html)
	}
)

export default loginRouter

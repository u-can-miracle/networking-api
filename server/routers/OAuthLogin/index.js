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
		req.query = {}
		req.originalUrl = '/main'
		req.url = '/main'
		req._parsedUrl.Url = {
			search: '',
			query: '',
			path: '/main',
			href: '/main',
			_raw: '/main'
		}
		const html = await getHtmlForFbAuth(req.user.id, req.headers['user-agent'], res)
		req.query = {}
		// res.redirect('/main')
		res.send(html)
	}
)

export default loginRouter

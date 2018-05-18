import express from 'express'
import passport from 'passport'

const loginRouter = express.Router()

loginRouter.get('/auth/facebook',
	passport.authenticate('facebook'),
	(req, res) => res.redirect('/')
)

loginRouter.get('/auth/facebook/callback',
	passport.authenticate('facebook', {
		failureRedirect: '/'
	}),
	(req, res) => res.redirect('/main')
)

export default loginRouter

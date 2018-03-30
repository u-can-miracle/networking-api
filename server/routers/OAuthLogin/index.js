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

loginRouter.get('/auth/google',
	passport.authenticate('google', { scope: [ 'profile' ] }),
	(req, res) => res.redirect('/')
)

loginRouter.get('/auth/google/callback',
	passport.authenticate('google', {
		failureRedirect: '/'
	}),
	(req, res) => res.redirect('/main')
)

export default loginRouter

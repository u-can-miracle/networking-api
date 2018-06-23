import express from 'express'
import {
	LoginUser
} from '../../../controllers/login/login'


const loginRouter = express.Router()

loginRouter.post('/login', (req, res, next) => {
	const { email, password } = req.body

	LoginUser(email, password, req.headers['user-agent'], res)
		.then(profileCurrentUser => {
			res.json(profileCurrentUser)
		})
		.catch(err => next(err))
})

export default loginRouter

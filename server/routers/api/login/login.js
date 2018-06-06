import express from 'express'
import {
	LoginUser
} from '../../../controllers/login/login'


const loginRouter = express.Router()

loginRouter.post('/login', (req, res) => {
	const { email, password } = req.body

	LoginUser(email, password, req.headers['user-agent'], res)
		.then(profileCurrentUser => {
			res.json(profileCurrentUser)
		})
		.catch(err => {
			console.log('/login err', err)
			res.sendStatus(500)
		})
})

export default loginRouter

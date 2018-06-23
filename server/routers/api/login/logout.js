import express from 'express'

import { logout } from '../../../controllers/login/logout'

const logoutRouter = express.Router()


logoutRouter.post('/logout', LogoutUser)


function LogoutUser(req, res, next){
	logout(req, res)
		.then(isLoggedOut => {
			if(isLoggedOut){
				res.json({ isLoggedOut: true })
			} else {
				res.sendStatus(400)
			}
		})
		.catch(err => next(err))
}

export default logoutRouter

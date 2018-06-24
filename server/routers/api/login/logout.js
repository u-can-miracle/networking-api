import express from 'express'

import authMiddlware from '../../../middleware/auth'
import { logout } from '../../../controllers/login/logout'

const logoutRouter = express.Router()


logoutRouter.post('/logout', authMiddlware, LogoutUser)


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

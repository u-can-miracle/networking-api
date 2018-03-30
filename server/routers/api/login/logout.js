import express from 'express'

import { logout } from '../../../controllers/login/logout'

const logoutRouter = express.Router()


logoutRouter.post('/logout', LogoutUser)


function LogoutUser(req, res){
	logout(req, res)
		.then(isLoggedOut => {
			if(isLoggedOut){
				res.json({ isLoggedOut: true })
			} else {
				res.sendStatus(400)
			}
		})
		.catch(err => {
			console.log('/logout route err', err)
			res.sendStatus(500)
		})
}

export default logoutRouter

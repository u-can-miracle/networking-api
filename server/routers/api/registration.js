import express from 'express'
import { registration } from '../../controllers/registration'

const regRouter = express.Router()

regRouter.post('/registration', registrUser)


export function registrUser(req, res){
	const { login, email, password } = req.body

	registration(login, email, password)
		.then(okResp => {
			const {
				isRequestedDataValid,
				user
			} = okResp

			if(isRequestedDataValid){
				res.json(user)
			} else {
				res.sendStatus(400)
			}
		})
		.catch(errResp => {
			console.log('/registration errResp', errResp)
			res.sendStatus(500)
		})
}

export default regRouter

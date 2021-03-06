import express from 'express'
import { registration } from '../../controllers/registration'

const regRouter = express.Router()

regRouter.post('/registration', registrUser)


export function registrUser(req, res, next){
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
		.catch(err => next(err))
}

export default regRouter

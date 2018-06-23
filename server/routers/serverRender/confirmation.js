import express from 'express'
import confirmation from '../../controllers/confirmation'

const confirmRouter = express.Router()

confirmRouter.get('/confirm/:hash', confirmMiddlware)

function confirmMiddlware(req, res, next){
	const { hash } = req.params

	confirmation(hash, req, res)
		.then(html => res.send(html))
		.catch(err => next(err))
}

export default confirmRouter

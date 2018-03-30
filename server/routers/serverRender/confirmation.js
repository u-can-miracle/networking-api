import express from 'express'
import confirmation from '../../controllers/confirmation'

const confirmRouter = express.Router()

confirmRouter.get('/confirm/:hash', confirmMiddlware)

function confirmMiddlware(req, res){
	const { hash } = req.params

	confirmation(hash, req, res)
		.then(html => res.send(html))
		.catch(err => {
			// add logging error
			console.log('err', err)
			res.sendStatus(500)
		})
}

export default confirmRouter

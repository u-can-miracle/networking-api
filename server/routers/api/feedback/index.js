import express from 'express'

import { UNAUTHORIZED } from '../../../constants'
import { addFeedback } from '../../../controllers/feedback'

const feedbackRouter = express.Router()

feedbackRouter.post('/feedback', async (req, res) => {
	const { isSuccessful, message } = await	addFeedback(req, req.body.message)

	if(isSuccessful){
		res.status(200)
	} else if (message === UNAUTHORIZED) {
		res.status(401)
	} else {
		res.status(400)
	}
	res.json({ isSuccessful })
})

export default feedbackRouter

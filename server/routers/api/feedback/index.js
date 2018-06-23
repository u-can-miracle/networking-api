import express from 'express'

import { addFeedback } from '../../../controllers/feedback'

const feedbackRouter = express.Router()

feedbackRouter.post('/feedback', async (req, res, next) => {
	try {
		const { isSuccessful } = await	addFeedback(req, req.body.message)

		res.json({ isSuccessful })
	} catch (err) {
		next(err)
	}
})

export default feedbackRouter

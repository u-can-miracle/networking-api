import express from 'express'

import authMiddlware from '../../../middleware/auth'
import { addFeedback } from '../../../controllers/feedback'

const feedbackRouter = express.Router()

feedbackRouter.post('/feedback', authMiddlware, async (req, res, next) => {
	try {
		const { isSuccessful } = await	addFeedback(req, req.body.message)

		res.json({ isSuccessful })
	} catch (err) {
		next(err)
	}
})

export default feedbackRouter

import express from 'express'

import { getUserProfileByIdCtrl } from '../../../controllers/profile'

const profileReviewRouter = express.Router()

profileReviewRouter.post('/get-by-id', async (req, res, next) => {
	const { profileId } = req.body

	try {
		const profileReview = await getUserProfileByIdCtrl(profileId)

		res.json({ profileReview })
	} catch (err) {
		next(err)
	}
})

export default profileReviewRouter

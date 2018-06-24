import express from 'express'

import authMiddlware from '../../../middleware/auth'
import { getUserProfileByIdCtrl } from '../../../controllers/profile'

const profileReviewRouter = express.Router()

profileReviewRouter.post('/get-by-id', authMiddlware, async (req, res, next) => {
	const { profileId } = req.body

	try {
		const profileReview = await getUserProfileByIdCtrl(profileId)

		res.json({ profileReview })
	} catch (err) {
		next(err)
	}
})

export default profileReviewRouter

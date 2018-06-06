import express from 'express'

import { getUserProfileByIdCtrl } from '../../../controllers/profile'

const profileReviewRouter = express.Router()

profileReviewRouter.post('/get-by-id', async (req, res) => {
	const { profileId } = req.body

	const profileReview = await getUserProfileByIdCtrl(profileId)

	res.json({ profileReview })
})

export default profileReviewRouter

import express from 'express'
import profileReview from '../../controllers/profileReview'

const profileReviewRouter = express.Router()

profileReviewRouter.get('/profile/:id', profileReviewMiddlware)

function profileReviewMiddlware(req, res, next){
	const { id } = req.params

	profileReview(req, id)
		.then(html => res.send(html))
		.catch(err => next(err))
}

export default profileReviewRouter

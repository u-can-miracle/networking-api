import express from 'express'
import profileReview from '../../controllers/profileReview'

const profileReviewRouter = express.Router()

profileReviewRouter.get('/profile/:id', profileReviewMiddlware)

function profileReviewMiddlware(req, res){
	const { id } = req.params

	profileReview(req, id)
		.then(html => res.send(html))
		.catch(err => {
			// add logging error
			console.log('err', err)
			res.sendStatus(500)
		})
}

export default profileReviewRouter

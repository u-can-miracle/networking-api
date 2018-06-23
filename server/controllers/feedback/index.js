import { getJwt } from '../../helpers'
import feedbackModel from '../../db/models/feedback'

export async function addFeedback(req, message){
	const jwToken = await getJwt(req)

	await feedbackModel.create(message, jwToken.userId)

	return {
		isSuccessful: true
	}
}

import { getJwt } from '../../helpers'
import { UNAUTHORIZED } from '../../constants'
import feedbackModel from '../../db/models/feedback'

export async function addFeedback(req, message){
	try {
		const jwToken = await getJwt(req)
		if(jwToken && jwToken.userId){
			const feedback = await feedbackModel.create(message, jwToken.userId)

			return {
				isSuccessful: true,
				feedback
			}
		} else {
			return {
				isSuccessful: false,
				message: UNAUTHORIZED
			}
		}
	} catch (err) {
		console.log('addFeedback ctrl err', err)
		return {
			isSuccessful: false
		}
	}
}

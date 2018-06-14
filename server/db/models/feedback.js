import Feedback from '../schemas/Feedback'


function create(message, userId){
	console.log('message', message)
	console.log('userId', userId)
	return Feedback.create({
		feedback: message,
		userId
	})
	.then(feedback => {
		const feedbackContact = feedback.get({
				plain: true
			})

		return feedbackContact
  })
}


export default {
	create
}

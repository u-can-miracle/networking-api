import Feedback from '../schemas/Feedback'


function create(message, userId){
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

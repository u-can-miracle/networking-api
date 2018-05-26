import UserEmail from '../schemas/UserEmail'

function getByEmail(emailValue){
	return UserEmail.findOne({
		where: {
			email: emailValue
		}
	})
	.then(emailRec => {
		if(!emailRec){
			return emailRec
		}

		const plainEmailRec = emailRec.get({
			plain: true
		})

		return plainEmailRec
	})
}


function createEmail(emailValue) {
	return UserEmail.create({
			email: emailValue
		})
		.then(user => {
			return user
		})
}


export default {
	getByEmail,
	createEmail
}

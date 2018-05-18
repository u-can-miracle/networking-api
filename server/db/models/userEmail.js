import UserEmail from '../schemas/UserEmail'

function findOrCreateEmail(email) {
	return UserEmail.findOrCreate({
			where: {
				email
			}
		})
		.spread(email => {
			return email.get({
				plain: true
			})
		})
}

export default {
	findOrCreateEmail
}

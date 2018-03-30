import User from '../schemas/User'


function getUserByField(fieldName, fieldValue){
	return User.findOne({ where: { [fieldName]: fieldValue } })
}

function createUser(user){
	const { login, email, password, hash } = user

	return User.create({ login, email, password, hash })
		.then(user => {
			return user
		})
}

function setUserAsConfirmedByEmail(email){
	return User.update(
		{ isConfirmed: true, hash: 'confirmed' },
		{ where: { email: email } })
}

export default {
	getUserByField,
	createUser,
	setUserAsConfirmedByEmail
}

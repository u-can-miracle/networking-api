import User from '../schemas/User'


function getUserByField(fieldName, fieldValue) {
	return User.findOne({
		where: {
			[fieldName]: fieldValue
		}
	})
}

function updateUserByField(updateField, updateVal, whereField, whereVal) {
	return User.update({
		[updateField]: updateVal
	}, {
		where: {
			[whereField]: whereVal
		},
		returning: true
	})
	.then(resp => {
		// const affectedAmount = resp[0]
		const affectedList = resp[1]
		const updatedEntity = affectedList[0]
		const plainUpdatedEntity = updatedEntity.get({
      plain: true
    })

		return plainUpdatedEntity
	})
}

function createUser(user) {
	const {
		login, email, password, hash
	} = user

	return User.create({
			login, email, password, hash
		})
		.then(user => {
			return user
		})
}

function setUserAsConfirmedByEmail(email) {
	return User.update({
		isConfirmed: true,
		hash: 'confirmed'
	}, {
		where: {
			email: email
		}
	})
}

export default {
	getUserByField,
	updateUserByField,
	createUser,
	setUserAsConfirmedByEmail
}

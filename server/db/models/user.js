import User from '../schemas/User'
import sequelize from '../connection'


function getUserByField(fieldName, fieldValue) {
	return User.findOne({
		where: {
			[fieldName]: fieldValue
		}
	})
}

function getUserByEmail(email){
	return sequelize.query(`
		SELECT
		"userEmail"."email" as "email",
		"user"."id",
		"user"."userName",
		"user"."login",
		"user"."password",
		"user"."location",
		"user"."isConfirmed",
		"user"."hash"
		FROM "public"."user"
		INNER JOIN "public"."userEmail"
		ON "userEmail"."id" = "user"."emailId"
		WHERE "userEmail"."email" = '${email}'
		LIMIT 1;
	`).spread(rawUsers => {
		console.log('getUserByEmail rawUsers', rawUsers)
		return rawUsers[0]
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
		login, emailId, password, hash
	} = user

	return User.create({
			login, emailId, password, hash
		})
		.then(user => {
			return user
		})
}

function setUserAsConfirmedByEmailId(emailId) {
	return User.update({
		isConfirmed: true,
		hash: 'confirmed'
	}, {
		where: {
			emailId
		}
	})
}

export default {
	getUserByField,
	getUserByEmail,
	updateUserByField,
	createUser,
	setUserAsConfirmedByEmailId
}

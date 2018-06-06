import User from '../schemas/User'
import sequelize from '../connection'


function getUserByField(fieldName, fieldValue) {
	return User.findOne({
		where: {
			[fieldName]: fieldValue
		}
	})
	.then(userRec => {
		if(!userRec){
			return userRec
		}

		const plainUserRec = userRec.get({
			plain: true
		})

		return plainUserRec
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
		"user"."comment",
		"user"."isConfirmed",
		"user"."hash"
		FROM "public"."user"
		INNER JOIN "public"."userEmail"
		ON "userEmail"."id" = "user"."emailId"
		WHERE "userEmail"."email" = '${email}'
		LIMIT 1;
	`).spread(rawUsers => {
		return rawUsers[0]
	})
}

function updateUserByField(updateObj, whereObj) {
	return User.update({
		...updateObj
	}, {
		where: {
			...whereObj
		},
		returning: true
	})
	.then(resp => {
		const affectedList = resp[1]
		const updatedEntity = affectedList[0]
		const plainUpdatedEntity = updatedEntity.get({
      plain: true
    })
		console.log('updateUserByField', plainUpdatedEntity)
		return plainUpdatedEntity
	})
}

function createUser(user) {
	return User.create({
			...user
		})
		.then(user => {
			const plainUser = user.get({
					plain: true
				})

			return plainUser
		})
}

function setUserAsConfirmedByEmailId(emailId) {
	return User.update({
		isConfirmed: true,
		hash: ''
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

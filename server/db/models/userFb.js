import UserFb from '../schemas/UserFb'
import sequelize from '../connection'


function getUserFbByFbId(fbId){
	return sequelize.query(
		`SELECT
			"fbId",
			"fbPage",
			"emailId"
			FROM "public"."userFb"
			WHERE "fbId"=${fbId}
			LIMIT 1;`
	).spread(rawUserFbList => {
		return rawUserFbList[0]
	})
}

function createUserFb(user){
	const {
		fbId, fbPage, emailId
	} = user

	return UserFb.create({
			fbId, fbPage, emailId
		})
		.then(user => {
			return user.get({
				plain: true
			})
		})
}


export default {
	getUserFbByFbId,
	createUserFb
}

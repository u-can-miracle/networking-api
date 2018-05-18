import UserFb from '../schemas/UserFb'

function createUserFb(user){
	const {
		fbId, userName, fbPage, photo, emailId, location
	} = user

	return UserFb.create({
			fbId, userName, fbPage, photo, emailId, location
		})
		.then(user => {
			return user.get({
				plain: true
			})
		})
}


export default {
	createUserFb
}

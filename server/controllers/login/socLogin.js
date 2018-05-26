import userEmailModel from '../../db/models/userEmail'
import userFbModel from '../../db/models/userFb'
import userModel from '../../db/models/user'
import photoModel from '../../db/models/photo'
import locationModel from '../../db/models/location'
import { FB_REG } from '../../constants'


/**
 * @param {Object} user
 * @param {string} user.fbId -fb internal id
 * @param {string} user.userName
 * @param {string} user.email
 * @param {string} user.photo - url
 * @param {string} user.fbPage - url
 * @param {string} user.location
 */
export async function handleFbUserData(userFb){
	try {
		const {
			fbId,
			// userName,
			email,
			photo,
			fbPage,
			location
		} = userFb

		const emailRec = await userEmailModel.getByEmail(email)

		if(emailRec){ // exist 1 of fb account or app account
			const	userFbRec = await userFbModel.getUserFbByFbId(fbId)
			if(userFbRec){ // fb account exists
				const userRec = await userModel.getUserByField('emailId', emailRec.id)
				return userRec
			} else { // app account exists
				const [ , userRec ] = await Promise.all([
					userFbModel.createUserFb({ fbId, fbPage, emailId: emailRec.id }),
					userModel.getUserByField('emailId', emailRec.id)
				])


				const promiseArr = []
				if(!userRec.location){
					promiseArr.push(locationModel.findOrCreateByName(location))
				} else {
					promiseArr.push(Promise.resolve())
				}
				if(!userRec.photo){
					promiseArr.push(photoModel.update(photo, userRec.id))
				} else {
					promiseArr.push(Promise.resolve())
				}

				let locationRec
				if(promiseArr.length){
					[ locationRec ] = await Promise.all(promiseArr)
				}


				let shouldUserUpdate = false
				let userNameUpdate
				let locationUpdate
				if(!userRec.userName){
					shouldUserUpdate = true
					userNameUpdate = { userName: userFb.userName }
				}
				if(locationRec){
					shouldUserUpdate = true
					locationUpdate = { location: locationRec.id }
				}

				if(shouldUserUpdate){
					await userModel.updateUserByField({
						...locationUpdate,
						...userNameUpdate
					}, {
						id: userRec.id
					})
				}

				return userRec
			}
		} else { // 1st login email don't exist yet
			const [ createdEmailRec, locationRec ] = await Promise.all([
				userEmailModel.createEmail(email),
				locationModel.findOrCreateByName(location)
			])

			const userRec = await userModel.createUser({
				login: userFb.userName,
				userName: userFb.userName,
				emailId: createdEmailRec.id,
				password: '',
				location: locationRec.id,
				comment: FB_REG
			})

			userFbModel.createUserFb({
				fbId, fbPage, emailId: createdEmailRec.id
			})
			photoModel.update(photo, userRec.id)

			return userRec
		}
	} catch (err) {
		console.log(' err', err)
	}
}

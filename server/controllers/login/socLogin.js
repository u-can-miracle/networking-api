import userEmailModel from '../../db/models/userEmail'
import locationModel from '../../db/models/location'
import userFbModel from '../../db/models/userFb'

/**
 * @param {Object} user
 * @param {string} user.fbId -fb internal id
 * @param {string} user.userName
 * @param {string} user.email
 * @param {string} user.photo - url
 * @param {string} user.fbPage - url
 * @param {string} user.location
 */

export async function createFbUser(user){
	const {
		fbId,
		userName,
		email,
		photo,
		fbPage,
		location
	} = user

	// 1 - find or create email
	// 2 - find or create location
	const [ emailRec, locationRec ] = await Promise.all([
		userEmailModel.findOrCreateEmail(email),
		locationModel.findOrCreateByName(location)
	])

	console.log('emailRec', emailRec)
	console.log('locationRec', locationRec)

	const userFb = {
		fbId,
		userName,
		photo,
		fbPage,
		emailId: emailRec.id,
		location: locationRec.id
	}
	const savedUserFb = await userFbModel.createUserFb(userFb)
	console.log('savedUserFb', savedUserFb)
	// 3 - find or create fbUser
}

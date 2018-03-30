import {
	getHtml,
	createToken,
	setJwtToCookies,
	getInitialState
} from '../helpers'
import userModel from '../db/models/user'

export default function confirmation(hash, req, res){
	let html
	let isUserExist = false

	return userModel.getUserByField('hash', hash)
		.then(user => {
			if(user === null){
				// html = getHtml(req)
				return getHtml(req)
			} else {
				isUserExist = true
				const token = createToken(user.id, req.headers['user-agent'])
				setJwtToCookies(token, res)

				userModel.setUserAsConfirmedByEmail(user.email)

				// token is not important if user confirming his/her email
				// so he/she does not have tags at this monent
				const pseudoToken = { userId: user.id }
				return getInitialState(pseudoToken, true)
			}
		})
		// .then(initState => {
		.then(resp => {
			if(isUserExist){
				const initState = resp

				return getHtml(req, initState)
			} else {
				const html = resp

				return html
			}
			// if(initState){
			// 	html = getHtml(req, initState)
			// }
			// return html
		})
		.catch(err => {
			// TODO: add logging
			console.log('confirmation ctrl err', err)
			return Promise.reject({})
		})
}

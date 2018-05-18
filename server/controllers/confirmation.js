import {
	getHtml,
	createToken,
	setJwtToCookies,
	getInitialState
} from '../helpers'
import userModel from '../db/models/user'

export default function confirmation(hash, req, res){
	let isUserExist = false

	return userModel.getUserByField('hash', hash)
		.then(user => {
			if(user === null){
				return getHtml(req)
			} else {
				isUserExist = true
				const { id, emailId } = user
				const token = createToken(id, emailId, req.headers['user-agent'])
				setJwtToCookies(token, res)

				userModel.setUserAsConfirmedByEmailId(emailId)

				// token is not important if user confirming his/her email
				// so he/she does not have tags at this monent
				const pseudoToken = { userId: id, emailId: emailId }
				return getInitialState(pseudoToken, true)
			}
		})
		.then(resp => {
			if(isUserExist){
				const initState = resp

				return getHtml(req, initState)
			} else {
				const html = resp

				return html
			}
		})
		.catch(err => {
			// TODO: add logging
			console.log('confirmation ctrl err', err)
			return Promise.reject({})
		})
}

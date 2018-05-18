import { isValidEmail } from '../helpers'
import { MIN_LENGTH } from '../constants'
import {
	ALREADY_USED_EMAIL,
	ALREADY_USED_LOGIN
} from '../constants'
import userModel from '../db/models/user'
import userEmailModel from '../db/models/userEmail'
import {
	createHash,
	cryptPassword,
	sendEmail
} from '../helpers'

export async function registration(login, email, password, req){
	let isRequestedDataValid

	if(login.length > MIN_LENGTH && password.length > MIN_LENGTH && isValidEmail(email)){
		isRequestedDataValid = true

		let isEmailUsed = false
		let isLoginUsed = false
		let emailMessage
		let loginMessage

		const founded = await Promise.all([
			userModel.getUserByEmail(email),
			userModel.getUserByField('login', login)
		])

		const userEmail = founded[0]
		const userLogin = founded[1]

		if(userLogin && userEmail){
			// email and login are exist
			isEmailUsed = true
			isLoginUsed = true
			emailMessage = ALREADY_USED_EMAIL
			loginMessage = ALREADY_USED_LOGIN
		} else if(userEmail){
			// only email exist
			isEmailUsed = true
			emailMessage = ALREADY_USED_EMAIL
		} else if(userLogin){
			// only login exist
			isLoginUsed = true
			loginMessage = ALREADY_USED_LOGIN
		} else {
			// email and login are not exist - create user
			isLoginUsed = false
			isEmailUsed = false

			const hash = createHash()

			try {
				const hashedPassword = await cryptPassword(password)
				const createdEmail = await userEmailModel.findOrCreateEmail(email)

				await userModel.createUser({
					login,
					emailId: createdEmail.id,
					password: hashedPassword,
					hash
				})

				sendEmail(email, hash, req)

				return {
					isRequestedDataValid,
					user: {
						emailMessage,
						loginMessage,
						isEmailUsed,
						isLoginUsed
					}
				}
			} catch (err){
				console.log('registr ctrl err', err)
				return Promise.reject({})
			}
		}
	} else {
		return { isRequestedDataValid: false }
	}
}

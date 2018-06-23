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

export async function registration(login, email, password){
	let isRequestedDataValid

	if(login.length > MIN_LENGTH && password.length > MIN_LENGTH && isValidEmail(email)){
		isRequestedDataValid = true

		let isEmailUsed = false
		let isLoginUsed = false
		let emailMessage
		let loginMessage

		const [ emailRec, userEmailRec, userLoginRec ] = await Promise.all([
			userEmailModel.getByEmail(email),
			userModel.getUserByEmail(email),
			userModel.getUserByField('login', login)
		])

		if(emailRec){
			// if emailRec exist then user exists is absolutely true
			if(userEmailRec.isRegisteredOnlyViaFb){
				const hash = createHash()
				const hashedPassword = await cryptPassword(password)

				userModel.updateUserByField({
					login,
					comment: '',
					password: hashedPassword,
					isRegisteredOnlyViaFb: false,
					hash
				}, {
					emailId: emailRec.id
				})

				sendEmail(email, hash)
			} else {
				// user email already exists
				isEmailUsed = true
				emailMessage = ALREADY_USED_EMAIL
			}
		} else { // email not exist - create email and user
			if(userLoginRec && userEmailRec){
				// email and login are exist
				isEmailUsed = true
				isLoginUsed = true
				emailMessage = ALREADY_USED_EMAIL
				loginMessage = ALREADY_USED_LOGIN
			} else if(userEmailRec){
				// only email exist
				isEmailUsed = true
				emailMessage = ALREADY_USED_EMAIL
			} else if(userLoginRec){
				// only login exist
				isLoginUsed = true
				loginMessage = ALREADY_USED_LOGIN
			} else {
				// email and login are not exist - create user
				isLoginUsed = false
				isEmailUsed = false

				const hash = createHash()

				const hashedPassword = await cryptPassword(password)
				const createdEmail = await userEmailModel.createEmail(email)

				await userModel.createUser({
					login,
					emailId: createdEmail.id,
					password: hashedPassword,
					hash
				})

				sendEmail(email, hash)
			}
		}

		return {
			isRequestedDataValid,
			user: {
				emailMessage,
				loginMessage,
				isEmailUsed,
				isLoginUsed
			}
		}
	} else {
		return { isRequestedDataValid: false }
	}
}

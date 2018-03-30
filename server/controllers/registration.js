import { isValidEmail } from '../helpers'
import { MIN_LENGTH } from '../constants'
import {
	ALREADY_USED_EMAIL,
	ALREADY_USED_LOGIN
} from '../constants'
import userModel from '../db/models/user'
import {
	createHash,
	cryptPassword,
	sendEmail
} from '../helpers'

export function registration(login, email, password, req){
	let isRequestedDataValid = false

	if(login.length > MIN_LENGTH && password.length > MIN_LENGTH && isValidEmail(email)){
		isRequestedDataValid = true

		let isEmailUsed = false
		let isLoginUsed = false
		let isUserNew = false
		let emailMessage
		let loginMessage
		let hash

		return Promise.all([
			userModel.getUserByField('email', email),
			userModel.getUserByField('login', login)
		])
			.then(response => {
				const userEmail = response[0]
				const userLogin = response[1]

				if(userLogin !== null && userEmail !== null){
					// email and login are exist
					isEmailUsed = true
					isLoginUsed = true
					emailMessage = ALREADY_USED_EMAIL
					loginMessage = ALREADY_USED_LOGIN
				} else if(userEmail !== null){
					// only email exist
					isEmailUsed = true
					emailMessage = ALREADY_USED_EMAIL
				} else if(userLogin !== null){
					// only login exist
					isLoginUsed = true
					loginMessage = ALREADY_USED_LOGIN
				} else {
					// email and login are not exist - create user
					isLoginUsed = false
					isEmailUsed = false

					isUserNew = true
					return cryptPassword(password)
				}
			})
			.then(hashedPassword => {
				if(isUserNew){
					hash = createHash()
					sendEmail(email, hash, req)
					return userModel.createUser({ login, email, password: hashedPassword, hash })
				}
			})
			.then(() => {
				// response only when we save user to db
				// omit response when we crash while saving user
				const response = {
					isRequestedDataValid,
					user: {
						emailMessage,
						loginMessage,
						isEmailUsed,
						isLoginUsed
					}
				}

				return Promise.resolve(response)
			})
			.catch(err => {
				console.log('registr ctrl err', err)
				return Promise.reject({})
			})
	} else {
		return Promise.resolve({ isRequestedDataValid })
	}
}

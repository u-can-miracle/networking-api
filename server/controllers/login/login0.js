import {
	WRONG_EMAIL,
	WRONG_PASSWORD,
	NOT_CONFIRMED_EMAIL
} from '../../constants'
import {
	setJwtToCookies,
	createToken,
	comparePassword,
	getInitialState
} from '../../helpers'
import userModel from '../../db/models/user'


// TODO: rewrite with async -isn't readable code
export async function LoginUser(email, password, userAgent, res){
	let isEmailWrong = false
	let isPassWrong = false
	let emailMsg = ''
	let passMsg = ''
	let userId

	return userModel.getUserByEmail(email)
		.then(user => {
			if(user === null){
				isEmailWrong = true
				emailMsg = WRONG_EMAIL
			} else if(user.isConfirmed === false){
				isEmailWrong = true
				emailMsg = NOT_CONFIRMED_EMAIL
			} else {
				isEmailWrong = false
				userId = user.id
				return comparePassword(password, user.password)
			}
		})
		.then(isPassEqual => {
			let pseudoToken

			if(isEmailWrong === false){
				if(!isPassEqual){
					passMsg = WRONG_PASSWORD
					isPassWrong = true
				} else {
					const token = createToken(userId, userAgent)
					setJwtToCookies(token, res)

					pseudoToken = { userId }
				}
			}

			return getInitialState(pseudoToken)
		})
		.then(initState => {
			const profile = {
				...initState.profile,
				isEmailWrong,
				isPassWrong,
				emailMsg,
				passMsg
			}

			const state = {
				...initState,	profile
			}
			console.log('state')
			return Promise.resolve(state)
		})
		.catch(err => {
			// TODO: log error to Winston
			console.log('login ctrl err', err)
			return Promise.reject({})
		})
}

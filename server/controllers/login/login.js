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


export async function LoginUser(email, password, userAgent, res){
	try {
		let isEmailWrong = false
		let isPassWrong = false
		let emailMsg = ''
		let passMsg = ''
		let pseudoToken

		const user = await userModel.getUserByEmail(email)

		if(!user){
			isEmailWrong = true
			emailMsg = WRONG_EMAIL
		} else if(user.isConfirmed === false){
			isEmailWrong = true
			emailMsg = NOT_CONFIRMED_EMAIL
		} else {
			isEmailWrong = false
			const userId = user.id
			const isPassEqual = await comparePassword(password, user.password)

			if(!isPassEqual){
				passMsg = WRONG_PASSWORD
				isPassWrong = true
			} else {
				const token = createToken(userId, userAgent)
				setJwtToCookies(token, res)

				pseudoToken = { userId }
			}
		}

		const initState = await getInitialState(pseudoToken)

		const loginRegistrDetails = {
			...initState.loginRegistrDetails,
			isEmailWrong,
			isPassWrong,
			emailMsg,
			passMsg
		}

		const state = {
			...initState,
			profileCurrentUser: {
				...initState.profileCurrentUser
			},
			loginRegistrDetails
		}

		return state
	} catch (err) {
		console.log(' err', err)
	}
}

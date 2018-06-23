import {
	WRONG_EMAIL,
	WRONG_PASSWORD,
	NOT_CONFIRMED_EMAIL,
	ONLY_FB_LOGGED
} from '../../constants'
import {
	setJwtToCookies,
	createToken,
	comparePassword,
	getInitialState
} from '../../helpers'
import userModel from '../../db/models/user'


export async function LoginUser(email, password, userAgent, res){
	let isEmailWrong = false
	let isPassWrong = false
	let emailMsg = ''
	let passMsg = ''
	let pseudoToken

	const user = await userModel.getUserByEmail(email)

	if(!user){
		isEmailWrong = true
		emailMsg = WRONG_EMAIL
	} else if (user.isRegisteredOnlyViaFb && user.password === ''){
		isPassWrong = true
		passMsg = ONLY_FB_LOGGED
	} else if(!user.isConfirmed){
		isEmailWrong = true
		emailMsg = NOT_CONFIRMED_EMAIL
	} else {
		isEmailWrong = false
		const userId = user.id
		const isPassEqual = await comparePassword(password, user.password)

		if(!isPassEqual){
			isPassWrong = true
			passMsg = WRONG_PASSWORD
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
}

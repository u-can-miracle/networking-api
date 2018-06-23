import { getJwt } from '../../helpers'

export async function logout(req, res){
	let isLoggedOut = false

	const token = await getJwt(req)

	if(token !== null){
		res.clearCookie('jwToken')
		isLoggedOut = true
	}

	return isLoggedOut
}

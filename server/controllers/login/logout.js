import { getJwt } from '../../helpers'

export function logout(req, res){
	let isLoggedOut = false

	return getJwt(req)
		.then(token => {
			if(token !== null){
				res.clearCookie('jwToken')
				isLoggedOut = true
			}
			return isLoggedOut
		})
		.catch(err => {
			console.log('ctrl logout err', err)
			return isLoggedOut
		})
}

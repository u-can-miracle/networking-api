import { getJwt } from '../helpers'

export default async function authMiddlware(req, res, next){
	const token = await getJwt(req)
	console.log('token', token)
	if(token){
		next()
	} else {
		res.sendStatus(401)
	}
}

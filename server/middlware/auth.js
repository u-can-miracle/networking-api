import { getJwt } from '../helpers'

export default async function authMiddlware(req, res, next){
	const token = await getJwt(req)

	if(token){
		next()
	} else {
		res.sendStatus(401)
	}
}

import { getJwt } from '../helpers'

export default async function authMiddlware(req, res, next){
	const token = await getJwt(req)

	if(!token || !token.userId || token.userAgent !== req.headers['user-agent']){
		res.sendStatus(401)
	} else {
		next()
	}
}

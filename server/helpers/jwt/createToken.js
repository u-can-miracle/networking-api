import jwt from 'jsonwebtoken'
import config from '../../config/config'

export function createToken(userId, userAgent){
	const payload = {
		userId: userId,
		userAgent: userAgent
	}
	const token = jwt.sign(payload, config.secretToken, {
		expiresIn: '14d'
	})

	return token
}

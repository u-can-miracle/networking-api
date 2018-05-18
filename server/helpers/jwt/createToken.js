import jwt from 'jsonwebtoken'
import config from '../../config/config'

export function createToken(userId, emailId, userAgent){
	const payload = {
		userId: userId,
		emailId: emailId,
		userAgent: userAgent
	}
	const token = jwt.sign(payload, config.secretToken, {
		expiresIn: '14d'
	})

	return token
}

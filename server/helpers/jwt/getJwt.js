import jwt from 'jsonwebtoken'
import Promise from 'bluebird'

import config from '../../config/config'

export function getJwt(req) {
	return new Promise((resolve, reject) => {
		const { jwToken } = req.signedCookies

		if(!jwToken){
			// user is not logged
			return resolve(null)
		} else {
			jwt.verify(jwToken, config.secretToken, function(err, decoded) {
				if(err){
					reject(err)
				} else {
					resolve(decoded)
				}
			})
		}
	})
}

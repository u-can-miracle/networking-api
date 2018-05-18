import config from '../../config/config'
import { postJsonToUrl, getJwt } from '../../helpers'
import { UNAUTHORIZED } from '../../constants'

const { elastic: { url } } = config

export default function sendMsgToElastic(path, req, tags) {
	return getJwt(req)
		.then(jwToken => {
			if (jwToken.userId) {
				const data = {
					userId: jwToken.userId,
					emailId: jwToken.emailId,
					tags
				}
				return postJsonToUrl(`${url}${path}`, data)
			} else {
				return Promise.reject(UNAUTHORIZED)
			}
		})
		.catch(err => {
			// TODO: create common handler for errors
			// return handle errors
			// handleError(err) {
			// 	if(err === UNAUTHORIZED){
			// 		return { status: 401 }
			// 	} else {
			// 		return { status: 500 }
			// 	}
			// }
			console.log('es err', err)
			if(err === UNAUTHORIZED){
				return { status: 401 }
			} else {
				return { status: 500 }
			}
		})
}

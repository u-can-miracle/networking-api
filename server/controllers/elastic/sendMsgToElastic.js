import config from '../../config/config'
import { postJsonToUrl, getJwt } from '../../helpers'

const { elastic: { url } } = config

export default async function sendMsgToElastic(path, req, tags) {
	const jwToken = await getJwt(req)
	const data = {
		userId: jwToken.userId,
		tags
	}

	return postJsonToUrl(`${url}${path}`, data)
}

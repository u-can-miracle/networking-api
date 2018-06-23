import config from '../config/config'
import { postJsonToUrl } from './'


export function getHtml(appUrl, initialPartialState = {}){
	const requestUrl = `${config.web.url}${config.web.getAppAndState}`
	const data = {
		appUrl,
		initialPartialState
	}
	return postJsonToUrl(requestUrl, data)
		.then(resp => {
			return resp.AppHtml
		})
}

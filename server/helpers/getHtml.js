import config from '../config/config'
import { postJsonToUrl } from './'


export function getHtml(req, initialPartialState = {}){
	const url = `${config.web.url}${config.web.getAppAndState}`
	const data = { 
		url: req.url, 
		initialPartialState 
	}
	return postJsonToUrl(url, data)
		.then(resp => {
			return resp.AppHtml
		})
		.catch(console.log)
}

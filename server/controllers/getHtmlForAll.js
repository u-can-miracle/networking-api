import {
	getJwt,
	getInitialState,
	getHtml
} from '../helpers'

function getHtmlForAll(req, res){
	let isTokenExist
	let isTokenValid

	return getJwt(req)
		.then(token => {
			if(token) {
				isTokenExist = true
				const { userAgent } = token
				isTokenValid = userAgent === req.headers['user-agent']

				if(isTokenValid) {
					// 1) get initial state = { isLogged: true, tags: { offer, looking }}
					return getInitialState(token)
				} else {
					// stollen cookies
					res.clearCookie('jwToken')
					return getHtml(req)
				}
			} else {
				isTokenExist = false
				return getHtml(req)
			}
		})
		.then(resp => {
			if(isTokenExist && isTokenValid){
				const initialState = resp

				return getHtml(req, initialState)
			} else {
				const html = resp

				return html
			}
		})
		.catch(err => {
			console.log('getHtmlForAll ctrl err', err)
			return Promise.reject({})
		})
}

module.exports = getHtmlForAll

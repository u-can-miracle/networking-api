import {
	createToken,
	setJwtToCookies,
	getInitialState,
	getHtml
} from '../../helpers'

export default async function getHtmlForFbAuth(userId, userAgent, res){
	try {
		const pseudoToken = { userId }
		const token = createToken(userId, userAgent)
		setJwtToCookies(token, res)

		const initialState = await getInitialState(pseudoToken)

		const appUrl = '/main'
		const html = await getHtml(appUrl, initialState)

		return html
	} catch (err) {
		// TODO: handle error
		console.log(' err', err)
		return err
	}
}

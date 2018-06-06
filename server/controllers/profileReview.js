import {
	getHtml,
	getJwt,
	getInitialState
} from '../helpers'

export default async function profileReview(req, userProfileId){
	const token = await getJwt(req)
	const initState = await getInitialState(token, false, userProfileId)
	const html = await getHtml(req.url, initState)

	return html
}

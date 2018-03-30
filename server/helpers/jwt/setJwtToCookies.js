export function setJwtToCookies(token, res){
	const twoWeeks = 1000 * 60 * 60 * 24 * 7 * 2

	res.cookie('jwToken', token, {
		maxAge: twoWeeks, httpOnly: true, signed: true
	})
}

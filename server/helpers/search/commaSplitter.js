export function commaSplitter(arr) {
	let str = ''

	while (arr.length) {
		str = str + '\'' + arr.pop() + '\''
		if (arr.length > 0) {
			str = str + ','
		}
	}
	return str
}

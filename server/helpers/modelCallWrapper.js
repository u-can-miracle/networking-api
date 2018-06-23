export async function modelCallWrapper(modalHandler, ...args){
	const result = await modalHandler(...args)

	return {
		isSuccessful: true,
		payload: {
			...result
		}
	}
}

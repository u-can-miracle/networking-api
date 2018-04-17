export async function modelCallWrapper(modalHandler, ...args){
	try {
		const result = await modalHandler(...args)
		return {
			isSuccessful: true,
			payload: {
				...result
			}
		}
	} catch (err) {
		// TODO: logging error
		console.log(`ctrl ${modalHandler} err:`, err)
		return { isSuccessful: false }
	}
}

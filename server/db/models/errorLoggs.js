import ErrorLogs from '../schemas/ErrorLogs'


function create(time, errorTypeId, message, stack, history, userId){
	return ErrorLogs.create({
		time,
		errorTypeId,
		message,
		stack,
		history,
		userId
	})
	.then(log => {
		const plainLog = log.get({
				plain: true
			})

		return plainLog
  })
}


export default {
	create
}

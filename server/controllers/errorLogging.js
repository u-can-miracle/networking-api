import {
	getJwt
} from '../helpers'
import errorLoggsModel from '../db/models/errorLoggs'

export default async function errorLogging(time, errorTypeId, message, stack, history, req){
	const { userId } = await getJwt(req)

	const log = await errorLoggsModel.create(
		time, errorTypeId, message, stack, history, userId
	)

	return log
}

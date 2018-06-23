
import express from 'express'
import errorLogging from '../../controllers/errorLogging'

const errorLoggingRouter = express.Router()

errorLoggingRouter.post('/error-report', errorLoggingMiddlware)


export async function errorLoggingMiddlware(req, res, next){
	const { time, errorTypeId, message, stack, history } = req.body

	try {
		const log = await errorLogging(time, errorTypeId, message, stack, history, req)

		res.json({ errorDescription: log.errorLog })
	} catch (err) {
		next(err)
	}
}

export default errorLoggingRouter

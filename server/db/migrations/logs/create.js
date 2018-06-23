import { errorLogsFields } from '../../schemas/ErrorLogs'
import { errorTypesFields } from '../../schemas/ErrorTypes'
import createFK from '../createFK'


export default function(queryInterface){
	return Promise.all([
		queryInterface.createTable('errorLogs', {
			...errorLogsFields
		}),
		queryInterface.createTable('errorTypes', {
			...errorTypesFields
		})
	])
	.then(() => Promise.all[
		createFKErrorType(queryInterface)
	])
}

function createFKErrorType(queryInterface){
	return createFK(queryInterface, 'errorLogs', 'errorTypeId', 'errorTypes')
}

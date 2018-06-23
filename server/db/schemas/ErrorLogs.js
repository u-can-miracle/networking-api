import Sequelize from 'sequelize'
import sequelize from '../connection'


const errorLogsFields = {
	time: {
		type: Sequelize.BIGINT,
		primaryKey: true
	},
	errorTypeId: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
  message: {
		type: Sequelize.STRING,
		allowNull: false
	},
  stack: {
		type: Sequelize.TEXT,
		allowNull: false
	},
  history: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	userId: {
		type: Sequelize.INTEGER,
		allowNull: true
	}
}
const ErrorLogs = sequelize.define('errorLogs', {
	...errorLogsFields
}, {
	freezeTableName: true,
	createdAt: false,
	updatedAt: false
})


export { errorLogsFields }
export default ErrorLogs

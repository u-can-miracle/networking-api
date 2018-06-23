import Sequelize from 'sequelize'
import sequelize from '../connection'


const errorTypesFields = {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	errorType: {
		type: Sequelize.STRING,
		allowNull: false
	}
}
const ErrorTypes = sequelize.define('errorTypes', {
	...errorTypesFields
}, {
	freezeTableName: true,
	createdAt: false,
	updatedAt: false
})


export { errorTypesFields }
export default ErrorTypes

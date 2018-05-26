import Sequelize from 'sequelize'
import sequelize from '../connection'


const userEmailFields = {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false
	}
}
const UserEmail = sequelize.define('userEmail', {
	...userEmailFields
}, {
	freezeTableName: true,
	createdAt: false,
	updatedAt: false
})


export { userEmailFields }
export default UserEmail

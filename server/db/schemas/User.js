import Sequelize from 'sequelize'
import sequelize from '../connection'


const userFields = {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
  login: {
		type: Sequelize.STRING,
		allowNull: false
	},
  email: {
		type: Sequelize.STRING,
		allowNull: false
	},
  password: {
		type: Sequelize.STRING,
		allowNull: false
	},
	isConfirmed: {
		type: Sequelize.BOOLEAN,
		allowNull: false,
		defaultValue: false
	},
  hash: { // hash for confirm registration
		type: Sequelize.STRING,
		allowNull: false
	},
	createdAt: Sequelize.DATE,
	updatedAt: Sequelize.DATE,
}
const User = sequelize.define('user', {
	...userFields
}, {
	freezeTableName: true,
	createdAt: false,
	updatedAt: false
})


export { userFields }
export default User

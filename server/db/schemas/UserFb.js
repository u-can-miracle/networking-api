import Sequelize from 'sequelize'
import sequelize from '../connection'


const userFbFields = {
	fbId: {
		type: Sequelize.STRING,
		primaryKey: true
	},
	userName: {
		type: Sequelize.STRING,
		defaultValue: ''
	},
	fbPage: {
		type: Sequelize.STRING,
	},
	photo: {
		type: Sequelize.STRING,
		defaultValue: ''
	},
  emailId: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	location: {
		type: Sequelize.INTEGER
	},
	createdAt: Sequelize.DATE,
	updatedAt: Sequelize.DATE,
}
const UserFb = sequelize.define('userFb', {
	...userFbFields
}, {
	freezeTableName: true,
	createdAt: false,
	updatedAt: false
})


export { userFbFields }
export default UserFb

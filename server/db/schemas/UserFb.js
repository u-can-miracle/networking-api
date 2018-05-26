import Sequelize from 'sequelize'
import sequelize from '../connection'


const userFbFields = {
	fbId: {
		type: Sequelize.BIGINT,
		primaryKey: true
	},
	fbPage: {
		type: Sequelize.STRING,
	},
  emailId: {
		type: Sequelize.INTEGER,
		allowNull: false
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

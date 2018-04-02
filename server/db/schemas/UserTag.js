import Sequelize from 'sequelize'
import sequelize from '../connection'


const userTagFields = {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	userId: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	tagId: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	tagTypeId: {
		type: Sequelize.INTEGER,
		allowNull: false
	}
}
const User = sequelize.define('userTag', {
	...userTagFields
}, {
	freezeTableName: true,
	createdAt: false,
	updatedAt: false
})


export { userTagFields }
export default User

import Sequelize from 'sequelize'

import sequelize from '../connection'

const User = sequelize.define('userTag', {
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
})

export default User

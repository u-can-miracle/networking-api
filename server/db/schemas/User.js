import Sequelize from 'sequelize'

import sequelize from '../connection'

const User = sequelize.define('user', {
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
	}
})

export default User

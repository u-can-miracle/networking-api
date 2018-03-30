import Sequelize from 'sequelize'

import sequelize from '../connection'

const Tag = sequelize.define('tag', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	}
})

export default Tag

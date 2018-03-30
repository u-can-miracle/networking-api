import Sequelize from 'sequelize'

import sequelize from '../connection'

const TagType = sequelize.define('tagType', {
	tagTypeId: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	tagTypeName: {
		type: Sequelize.STRING,
		allowNull: false
	}
})

export default TagType

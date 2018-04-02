import Sequelize from 'sequelize'
import sequelize from '../connection'


const tagTypeFields = {
	tagTypeId: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	tagTypeName: {
		type: Sequelize.STRING,
		allowNull: false
	}
}
const TagType = sequelize.define('tagType', {
	...tagTypeFields
}, {
	freezeTableName: true,
	createdAt: false,
	updatedAt: false
})


export { tagTypeFields }
export default TagType

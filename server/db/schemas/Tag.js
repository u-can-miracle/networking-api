import Sequelize from 'sequelize'
import sequelize from '../connection'


const tagFields = {
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
}
const Tag = sequelize.define('tag', {
	...tagFields
}, {
	freezeTableName: true,
	createdAt: false,
	updatedAt: false
})


export { tagFields }
export default Tag

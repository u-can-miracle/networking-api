import Sequelize from 'sequelize'
import sequelize from '../connection'


const descriptionFields = {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
  description: {
		type: Sequelize.STRING,
		allowNull: false
	}
}
const Description = sequelize.define('description', {
	...descriptionFields
}, {
	freezeTableName: true,
	createdAt: false,
	updatedAt: false
})


export { descriptionFields }
export default Description

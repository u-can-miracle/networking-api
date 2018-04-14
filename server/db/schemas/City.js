import Sequelize from 'sequelize'
import sequelize from '../connection'


const cityFields = {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
  name: {
		type: Sequelize.STRING,
		allowNull: false
	}
}
const City = sequelize.define('city', {
	...cityFields
}, {
	freezeTableName: true,
	createdAt: false,
	updatedAt: false
})


export { cityFields }
export default City

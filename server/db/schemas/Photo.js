import Sequelize from 'sequelize'
import sequelize from '../connection'


const photoFields = {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
  photo: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	userId: {
		type: Sequelize.INTEGER
	}
}
const Photo = sequelize.define('photo', {
	...photoFields
}, {
	freezeTableName: true,
	createdAt: false,
	updatedAt: false
})


export { photoFields }
export default Photo

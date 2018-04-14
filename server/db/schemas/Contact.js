import Sequelize from 'sequelize'
import sequelize from '../connection'


const contactFields = {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
  contactType: { // ckype, phone ...
		type: Sequelize.STRING,
		allowNull: false
	},
  contactValue: {
		type: Sequelize.STRING,
		allowNull: false
	},
	userId: {
		type: Sequelize.INTEGER
	}
}
const Contact = sequelize.define('contact', {
	...contactFields
}, {
	freezeTableName: true,
	createdAt: false,
	updatedAt: false
})


export { contactFields }
export default Contact

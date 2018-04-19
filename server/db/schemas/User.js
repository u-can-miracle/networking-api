import Sequelize from 'sequelize'
import sequelize from '../connection'
import Description from './Description'
import Photo from './Photo'


const userFields = {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	userName: {
		type: Sequelize.STRING,
		defaultValue: ''
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
	location: {
		type: Sequelize.INTEGER
	},
	isConfirmed: {
		type: Sequelize.BOOLEAN,
		allowNull: false,
		defaultValue: false
	},
  hash: { // hash for confirm registration
		type: Sequelize.STRING,
		allowNull: false
	},
	createdAt: Sequelize.DATE,
	updatedAt: Sequelize.DATE,
}
const User = sequelize.define('user', {
	...userFields
}, {
	freezeTableName: true,
	createdAt: false,
	updatedAt: false,
	hooks: {
		afterCreate: function(user/*, options*/) {
			const { id } = user
			Description.create({ userId: id, description: '' })
			Photo.create({ userId: id, photo: '' })
		}
	}
})


export { userFields }
export default User

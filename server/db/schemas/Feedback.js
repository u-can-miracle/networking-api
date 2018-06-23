import Sequelize from 'sequelize'
import sequelize from '../connection'


const feedbackFields = {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
  feedback: {
		type: Sequelize.STRING,
		allowNull: false
	},
	userId: {
		type: Sequelize.INTEGER
	}
}
const Feedback = sequelize.define('feedback', {
	...feedbackFields
}, {
	freezeTableName: true,
	createdAt: false,
	updatedAt: false
})


export { feedbackFields }
export default Feedback

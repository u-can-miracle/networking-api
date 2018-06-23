import create from './logs/create'
import drop from './logs/drop'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return create(queryInterface, Sequelize)
  },

  down: (queryInterface, Sequelize) => {
		return drop(queryInterface, Sequelize)
  }
}

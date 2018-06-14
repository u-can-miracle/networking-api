import create from './feedback/create'
import drop from './feedback/drop'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return create(queryInterface, Sequelize)
  },

  down: (queryInterface, Sequelize) => {
		return drop(queryInterface, Sequelize)
  }
}

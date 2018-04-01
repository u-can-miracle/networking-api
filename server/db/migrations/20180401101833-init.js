import create from './init/create'
import drop from './init/drop'

module.exports = {
  up: (queryInterface, Sequelize) => {
		return create(queryInterface, Sequelize)
  },

  down: (queryInterface, Sequelize) => {
    return drop(queryInterface, Sequelize)
  }
}

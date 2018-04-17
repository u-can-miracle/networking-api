import insertInit from './init/insert'
import removeInit from './init/remove'

export default {
  up: (queryInterface, Sequelize) => {
    return insertInit(queryInterface, Sequelize)
  },

  down: (queryInterface, Sequelize) => {
		return removeInit(queryInterface, Sequelize)
  }
}

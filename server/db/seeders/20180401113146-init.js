import insertInit from './init/insert'
import deleteInit from './init/delete'

export default {
  up: (queryInterface, Sequelize) => {
    return insertInit(queryInterface, Sequelize)
  },

  down: (queryInterface, Sequelize) => {
		return deleteInit(queryInterface, Sequelize)
  }
}

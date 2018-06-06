import insertAfterCreate from './_afterCreate/insert'
import removeAfterCreate from './_afterCreate/remove'

export default {
  up: (queryInterface, Sequelize) => {
    return insertAfterCreate(queryInterface, Sequelize)
  },

  down: (queryInterface, Sequelize) => {
		return removeAfterCreate(queryInterface, Sequelize)
  }
}

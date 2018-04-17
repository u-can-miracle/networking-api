import insert from './add-profile/insert'
import remove from './add-profile/remove'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return insert(queryInterface, Sequelize)
  },

  down: (queryInterface, Sequelize) => {
		return remove(queryInterface, Sequelize)
  }
}

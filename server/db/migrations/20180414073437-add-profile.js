import createTables from './add-profile/up/createTables'
import addColumnsToUser from './add-profile/up/addColumnsToUser'

import removeColumnsFromUser from './add-profile/down/removeColumnsFromUser'
import dropTables from './add-profile/down/dropTables'

module.exports = {
  up: (queryInterface, Sequelize) => {
		return createTables(queryInterface, Sequelize)
			.then(() => addColumnsToUser(queryInterface, Sequelize))
  },

  down: (queryInterface, Sequelize) => {
		return removeColumnsFromUser(queryInterface, Sequelize)
			.then(() => dropTables(queryInterface, Sequelize))
  }
}

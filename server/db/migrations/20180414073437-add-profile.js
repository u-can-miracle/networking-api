import createTables from './add-profile/up/createTables'
import { createFKLocationId } from './add-profile/up/addFk'

import dropTables from './add-profile/down/dropTables'

module.exports = {
  up: (queryInterface, Sequelize) => {
		return createTables(queryInterface, Sequelize)
			.then(() => createFKLocationId(queryInterface, Sequelize))
  },

  down: (queryInterface, Sequelize) => {
		return dropTables(queryInterface, Sequelize)
  }
}

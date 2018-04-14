export default function addColumnsToUser(queryInterface, Sequelize){
	return Promise.all([
		queryInterface.addColumn('user', 'userName', {
			type: Sequelize.STRING,
			after: 'id'
		}),
		queryInterface.addColumn('user', 'location', {
			type: Sequelize.INTEGER,
			after: 'password',
			references: {
				model: 'city',
				key: 'id'
			}
		}),

		// will not mess user row with long description and base64 photo
		queryInterface.addColumn('user', 'description', {
			type: Sequelize.INTEGER,
			after: 'location',
			references: {
				model: 'description',
				key: 'id'
			}
		}),
		queryInterface.addColumn('user', 'photoBase64', {
			type: Sequelize.INTEGER,
			after: 'hash',
			references: {
				model: 'photo',
				key: 'id'
			}
		})
	])
}

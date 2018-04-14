export default function dropTables(queryInterface){
	return Promise.all([
		queryInterface.dropTable('city'),
		queryInterface.dropTable('contact'),
		queryInterface.dropTable('description'),
		queryInterface.dropTable('photo')
	])
}

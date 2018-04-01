export default function dropTables(queryInterface){
	return Promise.all([
		queryInterface.dropTable('user'),
		queryInterface.dropTable('tag'),
		queryInterface.dropTable('tagType'),
		queryInterface.dropTable('userTag')
	])
}

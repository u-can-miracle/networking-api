export default function dropTable(queryInterface){
	return queryInterface.dropTable('errorLogs')
		.then(() => queryInterface.dropTable('errorTypes'))
}

export default function dropTable(queryInterface){
	return Promise.all([
		queryInterface.dropTable('feedback')
	])
}

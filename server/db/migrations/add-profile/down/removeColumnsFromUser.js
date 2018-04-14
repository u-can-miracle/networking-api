export default function removeColumnsFromUser(queryInterface){
	return Promise.all([
		queryInterface.removeColumn('user', 'userName'),
		queryInterface.removeColumn('user', 'location'),
		queryInterface.removeColumn('user', 'description'),
		queryInterface.removeColumn('user', 'photoBase64')
	])
}

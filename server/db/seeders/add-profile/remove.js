export default function(queryInterface){
	return Promise.all([
		queryInterface.bulkDelete('description', null, {}),
		queryInterface.bulkDelete('photo', null, {})
	])
}

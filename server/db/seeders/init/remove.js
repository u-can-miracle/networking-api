export default function(queryInterface){
	return Promise.all([
		queryInterface.bulkDelete('user', null, {}),
		queryInterface.bulkDelete('userFb', null, {}),
		queryInterface.bulkDelete('userEmail', null, {}),
		queryInterface.bulkDelete('tagType', null, {}),
		queryInterface.bulkDelete('tag', null, {}),
		queryInterface.bulkDelete('userTag', null, {})
	])
}

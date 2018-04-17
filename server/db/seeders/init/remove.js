export default function(queryInterface){
	return Promise.all([
		queryInterface.bulkDelete('user', null, {}),
		queryInterface.bulkDelete('tagType', null, {}),
		queryInterface.bulkDelete('tag', null, {}),
		queryInterface.bulkDelete('userTag', null, {})
	])
}

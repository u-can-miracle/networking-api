export default function(queryInterface){
	return queryInterface.bulkDelete('userTag', null, {})
		.then(() => queryInterface.bulkDelete('errorTypes', null, {}))
}

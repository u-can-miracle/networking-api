export default function(queryInterface){
	return queryInterface.bulkInsert('tagType', [
		{
			tagTypeId: 1,
			tagTypeName: 'offer'
		}, {
			tagTypeId: 2,
			tagTypeName: 'looking'
		}
	], {})
}

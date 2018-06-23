import { FRONT, BACK } from '../../../constants'

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
	.then(() => queryInterface.bulkInsert('errorTypes', [
		{
			id: 1,
			errorType: FRONT
		}, {
			id: 2,
			errorType: BACK
		}
	], {}))
}

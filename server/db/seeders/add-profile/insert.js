export default function(queryInterface){
	return Promise.all([
		queryInterface.bulkInsert('description', [
			{
				id: 3,
				userId: 3,
				description : ''
			}, {
				id: 4,
				userId: 4,
				description : ''
			}, {
				id: 5,
				userId: 5,
				description : ''
			}, {
				id: 7,
				userId: 7,
				description : ''
			}
		], {}),

		queryInterface.bulkInsert('photo', [
			{
				id: 3,
				userId: 3,
				photo : ''
			}, {
				id: 4,
				userId: 4,
				photo : ''
			}, {
				id: 5,
				userId: 5,
				photo : ''
			}, {
				id: 7,
				userId: 7,
				photo : ''
			}
		], {})
	])
}

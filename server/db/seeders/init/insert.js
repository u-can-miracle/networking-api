const pass = '$2a$10$gwo4OrbTzh9aDIS6BIYMquKKHVOOqU2RaeE4i18ImPpmPj02spE6C'

export default function(queryInterface){
	return Promise.all([
		queryInterface.bulkInsert('user', [
			{
				id: 3,
				login: 'facebook',
				email: 'facebook@gmail.com',
				password: pass,
				isConfirmed: true,
				hash: 'confirmed'
			}, {
				id: 4,
				login: 'google',
				email: 'google@gmail.com',
				password: pass,
				isConfirmed: true,
				hash: 'confirmed'
			}, {
				id: 5,
				login: 'ElonMusk',
				email: 'elonm@gmail.com',
				password: pass,
				isConfirmed: true,
				hash: 'confirmed'
			}, {
				id: 7,
				login: 'u-can-miracle',
				email: 'cloudsmoonlight@gmail.com',
				password: pass,
				isConfirmed: true,
				hash: 'confirmed'
			}
		], {}),

		queryInterface.bulkInsert('tagType', [
			{
				tagTypeId: 1,
				tagTypeName: 'offer'
			}, {
				tagTypeId: 2,
				tagTypeName: 'looking'
			}
		], {}),

		queryInterface.bulkInsert('tag', [
			{
				id: 22,
				name: 'Node'
			}, {
				id: 23,
				name: 'React'
			}, {
				id: 24,
				name: 'Redux'
			}, {
				id: 25,
				name: 'js'
			}, {
				id: 26,
				name: 'Wind energy'
			}, {
				id: 27,
				name: 'Solar energy'
			}, {
				id: 28,
				name: 'Elasticsearch'
			}, {
				id: 29,
				name: 'tag'
			}, {
				id: 30,
				name: 'elasticsearch'
			}, {
				id: 34,
				name: 'node'
			}, {
				id: 35,
				name: 'Hi-tech'
			}, {
				id: 36,
				name: 'artificial intelligence'
			}, {
				id: 38,
				name: 'Space delivery'
			}, {
				id: 39,
				name: 'nodejs'
			}
		], {}),

		queryInterface.bulkInsert('userTag', [
			{
				id: 17,
				userId: 5,
				tagId: 26,
				tagTypeId: 1
			}, {
				id: 18,
				userId: 5,
				tagId: 27,
				tagTypeId: 1
			}, {
				id: 19,
				userId: 5,
				tagId: 22,
				tagTypeId: 2
			}, {
				id: 20,
				userId: 3,
				tagId: 23,
				tagTypeId: 2
			}, {
				id: 21,
				userId: 3,
				tagId: 24,
				tagTypeId: 2
			}, {
				id: 55,
				userId: 5,
				tagId: 23,
				tagTypeId: 2
			}, {
				id: 23,
				userId: 7,
				tagId: 22,
				tagTypeId: 1
			}, {
				id: 24,
				userId: 7,
				tagId: 23,
				tagTypeId: 1
			}, {
				id: 25,
				userId: 7,
				tagId: 24,
				tagTypeId: 1
			}, {
				id: 27,
				userId: 7,
				tagId: 27,
				tagTypeId: 2
			}, {
				id: 28,
				userId: 7,
				tagId: 26,
				tagTypeId: 2
			}, {
				id: 56,
				userId: 8,
				tagId: 23,
				tagTypeId: 1
			}, {
				id: 57,
				userId: 8,
				tagId: 24,
				tagTypeId: 1
			}, {
				id: 58,
				userId: 8,
				tagId: 26,
				tagTypeId: 2
			}, {
				id: 61,
				userId: 3,
				tagId: 36,
				tagTypeId: 1
			}, {
				id: 63,
				userId: 5,
				tagId: 38,
				tagTypeId: 1
			}, {
				id: 65,
				userId: 4,
				tagId: 34,
				tagTypeId: 2
			}
		], {})
	])
}

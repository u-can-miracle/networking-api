const pass = '$2a$10$gwo4OrbTzh9aDIS6BIYMquKKHVOOqU2RaeE4i18ImPpmPj02spE6C'

export default function(queryInterface){
	return Promise.all([
		queryInterface.bulkInsert('userEmail', [
			{
				id: 1,
				email: 'facebook@gmail.com'
			},
			{
				id: 2,
				email: 'google@gmail.com'
			},
			{
				id: 3,
				email: 'elonm@gmail.com'
			},
			{
				id: 4,
				email: 'cloudsmoonlight@gmail.com'
			}
		], {}),

		queryInterface.bulkInsert('user', [
			{
				id: 3,
				login: 'facebook',
				emailId: 1,
				password: pass,
				isConfirmed: true,
				hash: 'confirmed',
				updatedAt: '2018-02-23 20:38:32.02+02',
				createdAt: '2018-02-23 20:38:32.02+02'
			}, {
				id: 4,
				login: 'google',
				emailId: 2,
				password: pass,
				isConfirmed: true,
				hash: 'confirmed',
				updatedAt: '2018-02-23 20:38:32.02+02',
				createdAt: '2018-02-23 20:38:32.02+02'
			}, {
				id: 5,
				login: 'ElonMusk',
				emailId: 3,
				password: pass,
				isConfirmed: true,
				hash: 'confirmed',
				updatedAt: '2018-02-23 20:38:32.02+02',
				createdAt: '2018-02-23 20:38:32.02+02'
			}, {
				id: 7,
				login: 'u-can-miracle',
				emailId: 4,
				password: pass,
				isConfirmed: true,
				hash: 'confirmed',
				updatedAt: '2018-02-23 20:38:32.02+02',
				createdAt: '2018-02-23 20:38:32.02+02'
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

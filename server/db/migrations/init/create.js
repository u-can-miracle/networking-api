import { userFields } from '../../schemas/User'
import { tagFields } from '../../schemas/Tag'
import { tagTypeFields } from '../../schemas/TagType'
import { userTagFields } from '../../schemas/UserTag'

export default function(queryInterface){
	return Promise.all([
		queryInterface.createTable('user', {
			...userFields
		}),
		queryInterface.createTable('tag', {
			...tagFields
		}),
		queryInterface.createTable('tagType', {
			...tagTypeFields
		}),
		queryInterface.createTable('userTag', {
			...userTagFields
		})
	])
}

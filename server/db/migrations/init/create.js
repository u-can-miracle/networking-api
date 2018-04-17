import { userFields } from '../../schemas/User'
import { tagFields } from '../../schemas/Tag'
import { tagTypeFields } from '../../schemas/TagType'
import { userTagFields } from '../../schemas/UserTag'

import { createFK } from '../../../helpers'

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
	.then(() => Promise.all([
		createFKUserId(queryInterface),
		createFKTagId(queryInterface),
		createFKTagTypeId(queryInterface)
	]))
}


function createFKUserId(queryInterface){
	return createFK(queryInterface, 'userTag', 'userId', 'user', 'id')
}


function createFKTagId(queryInterface){
	return createFK(queryInterface, 'userTag', 'tagId', 'tag')
}

function createFKTagTypeId(queryInterface){
	return createFK(queryInterface, 'userTag', 'tagTypeId', 'tagType', 'tagTypeId')
}

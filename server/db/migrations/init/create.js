import { userFields } from '../../schemas/User'
import { tagFields } from '../../schemas/Tag'
import { tagTypeFields } from '../../schemas/TagType'
import { userTagFields } from '../../schemas/UserTag'

import createConstraint from '../../../helpers/createConstraint'

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
		createConstraintUserId(queryInterface),
		createConstraintTagId(queryInterface),
		createConstraintTagTypeId(queryInterface)
	]))
}

function createConstraintUserId(queryInterface){
	return createConstraint(queryInterface, 'userTag', 'userId', 'user', 'id')
}


function createConstraintTagId(queryInterface){
	return createConstraint(queryInterface, 'userTag', 'tagId', 'tag')
}

function createConstraintTagTypeId(queryInterface){
	return createConstraint(queryInterface, 'userTag', 'tagTypeId', 'tagType', 'tagTypeId')
}

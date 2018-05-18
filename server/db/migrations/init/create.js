import { userEmailFields } from '../../schemas/UserEmail'
import { userFields } from '../../schemas/User'
import { tagFields } from '../../schemas/Tag'
import { tagTypeFields } from '../../schemas/TagType'
import { userTagFields } from '../../schemas/UserTag'
import { userFbFields } from '../../schemas/UserFb'

import createFK from '../createFK'

export default function(queryInterface){
	return Promise.all([
		queryInterface.createTable('user', {
			...userFields
		}),
		queryInterface.createTable('userFb', {
			...userFbFields
		}),
		queryInterface.createTable('userEmail', {
			...userEmailFields
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
		createFKUserEmail(queryInterface),
		createFKUserFbEmail(queryInterface),
		createFKTagId(queryInterface),
		createFKTagTypeId(queryInterface)
	]))
}


function createFKUserEmail(queryInterface){
	return createFK(queryInterface, 'user', 'emailId', 'userEmail')
}

function createFKUserFbEmail(queryInterface){
	return createFK(queryInterface, 'userFb', 'emailId', 'userEmail')
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

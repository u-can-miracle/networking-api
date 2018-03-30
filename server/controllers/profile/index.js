import userModel from '../../db/models/user'
import tagModel from '../../db/models/tag'
import tagTypeModel from '../../db/models/tagType'
import userTagModel from '../../db/models/userTag'
import constants from '../../constants'
import tagTypeHelper from '../../helpers/model/tagType'
import { getJwt } from '../../helpers'

export function addTag(tagTypeName, tagName, req) {
	let savedUser
	let savedTag

	return getJwt(req)
		.then(jwToken => {
			if (jwToken.userId) {
				return userModel.getUserByField('id', jwToken.userId)
			} else {
				return Promise.reject(constants.UNAUTHORIZED)
			}
		})
		.then(user => {
			if (user) {
				savedUser = user
				return savedUser
			} else {
				return Promise.reject(`${constants.UNAUTHORIZED} id: ${user.id}`)
			}
		})
		.then(() => {
			return Promise.all([
				tagModel.findOrCreateTagByName(tagName),
				tagTypeModel.getAllTagTypes()
			])
		})
		.then(resp => {
			savedTag = resp[0]

			const clearTagTypes = tagTypeHelper.getClearTagTypes(resp[1])
			const tagTypeId = tagTypeHelper.getTagTypeIdByName(clearTagTypes, tagTypeName)

			return userTagModel.saveUserTag(savedUser.id, savedTag.id, tagTypeId)
		})
		.then(userTag => {
			return Promise.resolve({
				userTagId: userTag.id,
				tagId: savedTag.id,
				tagName: savedTag.name
			})
		})
		.catch(err => {
			// logging error
			console.log('profile ctrl addTag err', err)
			return Promise.reject({})
		})
}

export function removeTag(userTagId){
	return userTagModel.removeUserTag(userTagId)
		.then(() => {
			return { userTagId }
		})
		.catch(err => {
			console.log('ctrl profile removeTag err', err)
			return { isRemoved: false }
		})
}

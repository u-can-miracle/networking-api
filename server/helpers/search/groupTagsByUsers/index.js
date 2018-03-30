import { OFFER_TYPE_ID, LOOKING_TYPE_ID } from '../../../constants'
import { OFFER, LOOKING } from '../../../constants'

export function groupTagsByUsers(rawDbResponse){
	const tagsResult = [ ...rawDbResponse ]
	const matchedUsers = []

	while(tagsResult.length){
		const currentTag = tagsResult.pop()
		const userIndex = matchedUsers.findIndex(
			user => user.userId === currentTag.userId
		)
		const tagToAdd = {
			tagName: currentTag.tagName,
			userTagId: currentTag.userTagId,
			tagTypeId: currentTag.tagTypeId,
			tagId: currentTag.tagId
		}
		const newUser = {
			userId: currentTag.userId,
			email: currentTag.email,
			login: currentTag.login,
			tags: {
				[OFFER]: [],
				[LOOKING]: []
			}
		}
		const { tagTypeId } = tagToAdd
		delete tagToAdd.tagTypeId

		if(userIndex > -1){
			const updatedNewUser = addTagToTagType(matchedUsers[userIndex], tagToAdd, tagTypeId)

			matchedUsers[userIndex] = updatedNewUser
		} else {
			// / new user
			const newUserWithTag = addTagToTagType(newUser, tagToAdd, tagTypeId)
			matchedUsers.push(newUserWithTag)
		}
	}

	return matchedUsers
}


function addTagToTagType(user, tagToAdd, tagTypeId){
	if(tagTypeId === OFFER_TYPE_ID){
		user.tags[OFFER].push(tagToAdd)
	} else if(tagTypeId === LOOKING_TYPE_ID){
		user.tags[LOOKING].push(tagToAdd)
	}

	return user
}

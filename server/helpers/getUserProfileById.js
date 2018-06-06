import commonModel from '../db/models/commonSql'
import userTagModel from '../db/models/userTag'
import { formatUserContacts, devideTagsOnTypes } from './'


export async function getUserProfileById(userId){
	const [ rawProfile, userTags ] = await Promise.all([
		commonModel.getUserProfileById(userId),
		userTagModel.getAllUserTagsByUserId(userId)
	])

	const userContacts = formatUserContacts(rawProfile)
	const tags = devideTagsOnTypes(userTags)

	const profileReview = {
		...userContacts,
		tags
	}

	return profileReview
}

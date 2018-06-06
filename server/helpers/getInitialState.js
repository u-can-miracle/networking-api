import {
	getDefaultState,
	devideTagsOnTypes,
	formatUserContacts,
	getUserProfileById
} from './'
import userTagModel from '../db/models/userTag'
import commonSql from '../db/models/commonSql'


export async function getInitialState(token, isItConfirmingProcess, userProfileId){
	const defaultState = await getDefaultState()

	if(!token || 'userId' in token === false) { // broken token
		return defaultState
	} else {
		const { userId } = token
		const [ curentUserProfile, tagsArr ] = await Promise.all([
			commonSql.getUserProfileById(userId),
			userTagModel.getAllUserTagsByUserId(userId)
		])

		const formattedProfile = formatUserContacts(curentUserProfile)
		const devidedTags = devideTagsOnTypes(tagsArr)

		defaultState.profileCurrentUser = {
			...defaultState.profileCurrentUser,
			...formattedProfile
		}
		defaultState.loginRegistrDetails.isLogged = true
		defaultState.profileCurrentUser.tags = { ...devidedTags }

		if(isItConfirmingProcess){
			defaultState.confirming.isItConfirmingProcess = true
		}
		if(userProfileId){
			const profileReview = await getUserProfileById(userProfileId)
			defaultState.profileReview = profileReview
		}

		return defaultState
	}
}

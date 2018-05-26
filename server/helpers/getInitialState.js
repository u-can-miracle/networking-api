import {
	getDefaultState,
	devideTagsOnTypes,
	formatUserProfile
} from './'
import userTagModel from '../db/models/userTag'
import commonSql from '../db/models/commonSql'

// TODO: rewrite to async syntax
export function getInitialState(token, isItConfirmingProcess){
	return getDefaultState()
		.then(defaultState => {
			if(!token || 'userId' in token === false) { // broken token
				return Promise.resolve(defaultState)
			} else {
				if(isItConfirmingProcess){
					defaultState.confirming.isItConfirmingProcess = true
				}

				const { userId } = token

				return Promise.all([
					commonSql.getUserProfileById(userId),
					userTagModel.getAllUserTagsByUserId(userId)
				])
				.then(resp => {
					const formattedProfile = formatUserProfile(resp[0])
					const tagsArr = resp[1]
					const devidedTags = devideTagsOnTypes(tagsArr)

					defaultState.profile = {
						...defaultState.profile,
						...formattedProfile
					}

					defaultState.profile.isLogged = true

					defaultState.profile.tags = { ...devidedTags }

					return defaultState
				})
			}
		})
}

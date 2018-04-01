import { getDefaultState } from './'
import userModel from '../db/models/user'
import userTagModel from '../db/models/userTag'
import { devideTagsOnTypes } from './devideTagsOnTypes'

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

				defaultState.profile.isLogged = true

				return Promise.all([
					userModel.getUserByField('id', userId),
					userTagModel.getAllUserTagsByUserId(userId)
				])
				.then(resp => {
					const userInfo = resp[0]
					const tagsArr = resp[1]
					const devidedTags = devideTagsOnTypes(tagsArr)

					defaultState.profile.userName = userInfo.login
					defaultState.profile.email = userInfo.email
					defaultState.profile.tags = { ...devidedTags }

					return defaultState
				})
			}
		})
}

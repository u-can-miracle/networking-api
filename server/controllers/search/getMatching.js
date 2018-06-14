import { getUsersTagsByUsersIds } from './'
import {
	getMatchedUsers as getMatchedUsersInElastic
} from '../elastic'
import { getJwt, mergeUsersTags } from '../../helpers'
import { UNAUTHORIZED } from '../../constants'

// TODO: override to async
export const getMatching = (req, tags) => {
	return getJwt(req)
		.then(jwToken => {
			if (jwToken && jwToken.userId){
				return getMatchedUsersInElastic(jwToken.userId , tags)
			}

			return Promise.reject(UNAUTHORIZED)
		})
		.then(usersIdsInElastic => {
			return getUsersTagsByUsersIds(usersIdsInElastic)
		})
		.then(matchedUsers => {
			const mergedTags = mergeUsersTags(matchedUsers)

			return mergedTags
		})
		.catch(err => {
			console.log('err', err)
			if(err === UNAUTHORIZED){
				return { status: 401 }
			} else {
				//TODO loggin error
				return { status: 500 }
			}
		})
}

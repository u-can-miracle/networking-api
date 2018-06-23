import { getUsersTagsByUsersIds } from './'
import {
	getMatchedUsers as getMatchedUsersInElastic
} from '../elastic'
import { getJwt, mergeUsersTags } from '../../helpers'

// TODO: override to async
export async function getMatching(req, tags){
	const jwToken = await getJwt(req)

	const usersIdsInElastic = await getMatchedUsersInElastic(jwToken.userId , tags)
	const matchedUsers = await getUsersTagsByUsersIds(usersIdsInElastic)
	const mergedTags = mergeUsersTags(matchedUsers)

	return mergedTags
}

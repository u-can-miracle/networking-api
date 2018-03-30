import {
	commaSplitter
} from '../../helpers'
import userTagsModel from '../../db/models/userTag'
import { groupTagsByUsers } from '../../helpers'

export const getUsersTagsByUsersIds = usersIdsArray => {
	const splittedUsersIds = commaSplitter(usersIdsArray)

	return userTagsModel.getAllTagsByUsersIds(splittedUsersIds)
		.then(notFormattedUserTags => {
			const formattedUserTags = groupTagsByUsers(notFormattedUserTags)

			return formattedUserTags
		})
}

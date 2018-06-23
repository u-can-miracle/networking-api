import {
	getJwt,
	commaSplitter,
	groupTagsByUser,
	addTagTypeField,
	mergeUsersTags
} from '../../helpers'
import userTagModel from '../../db/models/userTag'
import { OFFER_TYPE_ID, LOOKING_TYPE_ID } from '../../constants'
import {
	OFFER,
	LOOKING
} from '../../constants'



/**
 * @param {Object} req request object
 * @param {Object} searchingTagsObj {looking:[''],offers:['']}
 *
 * @returns {searchingResults} Promise[]
 */
export const searchMatchingTags = (req, searchingTags) => {
	return getJwt(req)
		.then(token => {
			const searchingOfferTags = commaSplitter(searchingTags[OFFER])
			const searchingLookingTags = commaSplitter(searchingTags[LOOKING])

			return Promise.all([
				userTagModel.searchMatchingTagsByType(
					token.userId,
					searchingOfferTags,
					LOOKING_TYPE_ID
				),
				userTagModel.searchMatchingTagsByType(
					token.userId,
					searchingLookingTags,
					OFFER_TYPE_ID
				)
			])
		})
		.then(foundedTags => {
			const otherUsersLooking = foundedTags[0]
			const otherUsersOffers = foundedTags[1]

			const usersWithLookingTags = groupTagsByUser(otherUsersLooking, LOOKING)
			const usersWithOfferTags = groupTagsByUser(otherUsersOffers, OFFER)

			const formattedUsersWithTags = mergeUsersTags(
				usersWithLookingTags,
				usersWithOfferTags
			)

			addTagTypeField(formattedUsersWithTags)

			return formattedUsersWithTags
		})
}

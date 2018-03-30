import { OFFER_TYPE_ID, LOOKING_TYPE_ID } from '../constants'
import { OFFER, LOOKING } from '../constants'


export function devideTagsOnTypes(tagsList){
	const devidedTags = {
		[OFFER]: [],
		[LOOKING]: []
	}
	const length = tagsList.length

	for(let i = 0; i < length; i++){
		const { tagName, tagId, tagTypeId, userTagId } = tagsList[i]
		const currentTag = { tagName, tagId, userTagId }

		if(tagTypeId === OFFER_TYPE_ID){
			devidedTags[OFFER].push(currentTag)
		} else if (tagTypeId === LOOKING_TYPE_ID) {
			devidedTags[LOOKING].push(currentTag)
		}
	}

	return devidedTags
}

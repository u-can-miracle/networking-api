import { LOOKING, OFFER } from '../../constants'


// Input:
// [{
// 	userId: 3,
// 	email: '',
// 	login: '',
//  tags: {
// 	 [LOOKING]: [{ userTagId, tagId, tagName }]
//  }
// }]
/**
 * @param {Array} userWithTags
 *
 */
export function addTagTypeField(userWithTags){
	const length = userWithTags.length

	for(let i = 0; i < length; i++){
		if(LOOKING in userWithTags[i].tags === false){
			userWithTags[i].tags[LOOKING] = []
		}

		if(OFFER in userWithTags[i].tags === false){
			userWithTags[i].tags[OFFER] = []
		}
	}

	return userWithTags
}
// Output:
// [{
// 	userId: 3,
// 	email: '',
// 	login: '',
//  tags: {
// 	 [LOOKING]: [{ userTagId, tagId, tagName }],
//   [OFFER]: []
//  }
// }]

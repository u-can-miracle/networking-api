// Input:
//
// 1:
// [{
// 	userId: 3,
// 	email: '',
// 	login: '',
//  tags: {
// 	 [tagTypeName]: [{ userTagId, tagId, tagName }]
//  }
// }]
//
// 2:
// [{
// 	userId: 3,
// 	email: '',
// 	login: '',
//  tags: {
// 	 [tagTypeName1]: [{ userTagId1, tagId1, tagName1 }]
//  }
// }]
/**
 * @param {Array} usersTagsOneType
 * @param {Array} usersTagsOtherType
 * @returns {Array} tagsWithUser
 */
export function mergeUsersTags(usersTagsOneType, usersTagsOtherType){
	let shortest
	let longest

	if(usersTagsOneType.length < usersTagsOtherType.length){
		shortest = usersTagsOneType
		longest = usersTagsOtherType
	} else {
		shortest = usersTagsOtherType
		longest = usersTagsOneType
	}

	while(shortest.length){
		const shortestUserWithTagsType = shortest.pop()
		const index = longest.findIndex(
			user => user.userId === shortestUserWithTagsType.userId
		)

		if(index > -1){
			longest[index].tags = {
				...longest[index].tags,
				...shortestUserWithTagsType.tags
			}
		} else {
			longest.push(shortestUserWithTagsType)
		}
	}

	return longest
}


// Output
// [{
// 	userId: 3,
// 	email: '',
// 	login: '',
//  tags: {
// 	 [tagTypeName]: [{ userTagId, tagId, tagName }],
// 	 [tagTypeName1]: [{ userTagId1, tagId1, tagName1 }]
//  }
// }]

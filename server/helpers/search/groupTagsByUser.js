// Input:
// [{
// 	userTagId: 2,
// 	tagId: 27,
// 	tagName: '',
// 	userId: 3,
// 	email: '',
// 	login: ''
// }]

/**
 * @param {Array} tagsWithUser
 * @returns {Array} usersWithTags
 */
export function groupTagsByUser(tagsWithUser, tagTypeName){
	const userWithTags = []

	while(tagsWithUser.length){
		const currentTag = tagsWithUser.pop()
		const index = userWithTags.findIndex(
			user => user.userId === currentTag.userId
		)

		if(index > -1){ // user already exist
			const { tagId, tagName, userTagId } = currentTag
			userWithTags[index].tags[tagTypeName].push({ tagId, tagName, userTagId })
		} else { // user does not exist
			const user = {
				userId: currentTag.userId,
				email: currentTag.email,
				login: currentTag.login,
				tags: {
					[tagTypeName]: [{
						userTagId: currentTag.userTagId,
						tagId: currentTag.tagId,
						tagName: currentTag.tagName
					}]
				}
			}
			userWithTags.push(user)
		}
	}

	return userWithTags
}

// Output:
// [{
// 	userId: 3,
// 	email: '',
// 	login: '',
//  [tagTypeName]: [{ userTagId, tagId, tagName }]
// }]

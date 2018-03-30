function getClearTagTypes(allTypes){
	const clearTagTypes = []
	const length = allTypes.length

	for(let i = 0; i < length; i++){
		const { tagTypeId, tagTypeName } = allTypes[i]
		clearTagTypes.push({ tagTypeId, tagTypeName })
	}

	return clearTagTypes
}

/**
 * @param {Array} tagTypes { tagTypeId, tagTypeName }
 * @param {String} tagTypeName
 * @returns {Number}
 */
function getTagTypeIdByName(tagTypes, tagTypeName){
	return tagTypes
					.filter(tagType => tagType.tagTypeName === tagTypeName)[0]
					.tagTypeId
}


export default {
	getClearTagTypes,
	getTagTypeIdByName
}

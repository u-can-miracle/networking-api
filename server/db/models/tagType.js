import TagType from '../schemas/TagType'

let tagTypes = []

function getAllTagTypes(){
	if(tagTypes.length){
		return Promise.resolve(tagTypes)
	} else {
		return TagType.findAll().then(allTypes => {
			tagTypes = allTypes

			return tagTypes
		})
	}
}


export default {
	getAllTagTypes
}

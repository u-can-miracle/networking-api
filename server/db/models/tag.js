import Tag from '../schemas/Tag'


function findOrCreateTagByName(tagName){
	return Tag.findOrCreate({
		where: {
			name: tagName
		}
	})
	.spread(tag => {
    return tag.get({
      plain: true
    })
	})
}


export default {
	findOrCreateTagByName
}

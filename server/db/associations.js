import User from './schemas/User'
import Tag from './schemas/Tag'
import UserTag from './schemas/UserTag'
import TagType from './schemas/TagType'
import Description from './schemas/Description'
import City from './schemas/City'
import Photo from './schemas/Photo'


User.belongsToMany(Tag, {
	through: {
		model: UserTag
	},
	foreignKey: 'userId'
})
Tag.belongsToMany(User, {
	through: {
		model: UserTag
	},
	foreignKey: 'tagId'
})


UserTag.belongsTo(TagType, {
	foreignKey: 'tagTypeId',
	targetKey: 'tagTypeId'
})
TagType.hasMany(UserTag, {
	foreignKey: 'tagTypeId',
	sourceKey: 'tagTypeId'
})


Description.belongsTo(User, { foreignKey: 'description' })
Photo.belongsTo(User, { foreignKey: 'userId' })


User.belongsTo(City, {
	as: 'Location',
	foreignKey: 'location',
	targetKey: 'id'
})

import User from './schemas/User'
import Tag from './schemas/Tag'
import UserTag from './schemas/UserTag'
import TagType from './schemas/TagType'


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

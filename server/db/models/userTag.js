import UserTag from '../schemas/UserTag'
import sequelize from '../connection'

function saveUserTag(userId, tagId, tagTypeId){
	return UserTag.create({ userId, tagId, tagTypeId })
		.then(savedTag => {
			return savedTag
		})
}

function getAllUserTagsByUserId(userId){
	return sequelize.query(
		`SELECT
			"userTags"."id" as "userTagId",
			"userTags"."tagId",
			"userTags"."tagTypeId",
			"tags"."name" as "tagName"
			FROM "public"."userTags"
			INNER JOIN "public"."tags"
			ON "userTags"."tagId"="tags"."id"
			WHERE "userTags"."userId"=${userId};`
	).spread(rawTags => {
		return rawTags
	})
}

function removeUserTag(userTagId){
	return UserTag.destroy({
    where: {
      id: userTagId
    }
  })
}

function searchMatchingTagsByType(userId, tagsEnum, tagTypeIdToFind){
	return sequelize.query(
		`SELECT
			"tags"."id" as "tagId",
			"tags"."name" as "tagName",
			"userTags"."id" as "userTagId",
			"users"."id"  as "userId",
			"users"."email",
			"users"."login"
			FROM  "tags"
			INNER JOIN "userTags"
			ON "tags"."id" = "userTags"."tagId"
			AND "userTags"."tagId" IN (${tagsEnum})
			AND "userTags"."tagTypeId" = ${tagTypeIdToFind}
			INNER JOIN "users"
			ON "users"."id" = "userTags"."userId"
			WHERE "users"."id" != ${userId}`
	).spread(rawTags => {
		return rawTags
	})
}

function getAllTagsByUsersIds(tagsEnum){
	return sequelize.query(
		`SELECT
			"tags"."id" as "tagId",
			"tags"."name" as "tagName",
			"userTags"."id" as "userTagId",
			"userTags"."tagTypeId",
			"users"."id"  as "userId",
			"users"."email",
			"users"."login"
			FROM  "tags"
			INNER JOIN "userTags"
			ON "tags"."id" = "userTags"."tagId"
			AND "userTags"."userId" IN (${tagsEnum})
			INNER JOIN "users"
			ON "users"."id" = "userTags"."userId"
			WHERE "users"."id" IN (${tagsEnum})`
	).spread(rawTags => {
		return rawTags
	})

}

export default {
	saveUserTag,
	getAllUserTagsByUserId,
	removeUserTag,
	searchMatchingTagsByType,
	getAllTagsByUsersIds
}

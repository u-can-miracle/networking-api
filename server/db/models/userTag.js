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
			"userTag"."id" as "userTagId",
			"userTag"."tagId",
			"userTag"."tagTypeId",
			"tag"."name" as "tagName"
			FROM "public"."userTag"
			INNER JOIN "public"."tag"
			ON "userTag"."tagId"="tag"."id"
			WHERE "userTag"."userId"=${userId};`
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
			"tag"."id" as "tagId",
			"tag"."name" as "tagName",
			"userTag"."id" as "userTagId",
			"user"."id"  as "userId",
			"user"."email",
			"user"."login"
			FROM  "tag"
			INNER JOIN "userTag"
			ON "tag"."id" = "userTag"."tagId"
			AND "userTag"."tagId" IN (${tagsEnum})
			AND "userTag"."tagTypeId" = ${tagTypeIdToFind}
			INNER JOIN "user"
			ON "user"."id" = "userTag"."userId"
			WHERE "user"."id" != ${userId}`
	).spread(rawTags => {
		return rawTags
	})
}

function getAllTagsByUsersIds(usersIdsEnum){
	return sequelize.query(
		`SELECT
		"tagId",
		"tagName",
		"userTagId",
		"tagTypeId",
		"userId",
		"login",
		"userEmail"."email"
		FROM "userEmail"
		INNER JOIN
		(
			SELECT
			 "tag"."id" as "tagId",
			"tag"."name" as "tagName",
			"userTag"."id" as "userTagId",
			"userTag"."tagTypeId",
			"user"."id"  as "userId",
			"user"."emailId",
			"user"."login"
			FROM  "tag"
			INNER JOIN "userTag"
			ON "tag"."id" = "userTag"."tagId"
			AND "userTag"."userId" IN (${usersIdsEnum})
			INNER JOIN "user"
			ON "user"."id" = "userTag"."userId"
			WHERE "user"."id" IN (${usersIdsEnum})
		) as "search"
		ON "userEmail"."id" = "search"."emailId"
		WHERE "search"."emailId" > 0`
		// > 0 because for all matching
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

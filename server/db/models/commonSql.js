import sequelize from '../connection'

function getUserProfileById(userId){
	return sequelize.query(
		`SELECT
		"user"."userName", "user"."login", "city"."name" as "location",
		"contact"."id" as "contactId",
		"contact"."contactType" ,
		"contact"."contactValue",
		"description"."description",
		"photo"."photo" as "photoBase64"
		FROM "public"."user"
		INNER JOIN "public"."description"
		ON "description"."userId"="user"."id"
		INNER JOIN "public"."photo"
		ON "photo"."userId"="user"."id"
		INNER JOIN "public"."city"
		ON "city"."id"="user"."location"
		INNER JOIN "public"."contact"
		ON "contact"."userId"="user"."id"
		where
		"user"."id"= ${userId}`
	).spread(rawProfile => {
		return rawProfile
	})
}

export default {
	getUserProfileById
}


// SELECT
// "user"."id", "user"."userName", "user"."login", "city"."name" as "location",
// "contact"."contactType" , "contact"."contactValue",
// "description"."description",
// "photo"."photo"
// FROM "public"."user"
// INNER JOIN "public"."description"
// ON "description"."userId"="user"."id"
// INNER JOIN "public"."photo"
// ON "photo"."userId"="user"."id"
// INNER JOIN "public"."city"
// ON "city"."id"="user"."location"
// INNER JOIN "public"."contact"
// ON "contact"."userId"="user"."id"
// where
// "user"."id"= 7;

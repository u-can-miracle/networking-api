import sequelize from '../connection'

function getUserProfileById(userId){
	return sequelize.query(
		`SELECT
		 "userEmail"."email",
		 "profile"."userId",
		 "profile"."userName",
		 "profile"."login",
		 "profile"."location",
		 "profile"."contactId",
		 "profile"."contactType" ,
		 "profile"."contactValue",
		 "profile"."description",
		 "profile"."photoBase64"
		 FROM "userEmail"
		 INNER JOIN
		 (
			 SELECT
			 "user"."emailId",
			 "user"."id" as "userId",
			 "user"."userName",
			 "user"."login",
			 COALESCE("city"."name", '') as "location",
			 "contact"."id" as "contactId",
			 "contact"."contactType" ,
			 "contact"."contactValue",
			 "description"."description",
			 "photo"."photo" as "photoBase64"
			 FROM "public"."user"
			 LEFT JOIN "public"."description"
			 ON "description"."userId"="user"."id"
			 LEFT JOIN "public"."photo"
			 ON "photo"."userId"="user"."id"
			 LEFT JOIN "public"."city"
			 ON "city"."id"="user"."location"
			 LEFT JOIN "public"."contact"
			 ON "contact"."userId"="user"."id"
			 WHERE "user"."id"= ${userId}
		) as "profile"
		 ON "userEmail"."id" = "profile"."emailId"
		`
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

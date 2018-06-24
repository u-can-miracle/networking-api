import express from 'express'

import { getMatchedUsers } from '../../../controllers/elastic'
import { getUsersTagsByUsersIds } from '../../../controllers/search'
import authMiddleware from '../../../middleware/auth'


const searchTagsRouter = express.Router()

searchTagsRouter.post('/tag/search', authMiddleware, searchTagsMiddlware)

export function searchTagsMiddlware(req, res, next){
	const { tags } = req.body  // ['']

	getMatchedUsers(req, tags)
		.then(usersIdArray => {
			// TODO: replace 'if' to getUsersTagsByUsersIds ctrl
			if(usersIdArray.length){
				return getUsersTagsByUsersIds(usersIdArray)
			} else {
				return [] // empty search result
			}
		})
		.then(usersTags => res.json(usersTags))
		.catch(err => next(err))
}

export default searchTagsRouter

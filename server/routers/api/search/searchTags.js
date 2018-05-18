import express from 'express'

import { getMatchedUsers } from '../../../controllers/elastic'
import { getUsersTagsByUsersIds } from '../../../controllers/search'
import authMiddleware from '../../../middlware/auth'


const searchTagsRouter = express.Router()

searchTagsRouter.post('/tag/search', authMiddleware, searchTagsMiddlware)

export function searchTagsMiddlware(req, res){

	const { tags } = req.body  // ['']

	getMatchedUsers(req, tags)
		.then(usersIdArray => {
			if(usersIdArray.length){
				return getUsersTagsByUsersIds(usersIdArray)
			} else {
				return [] // empty search result
			}
		})
		.then(usersTags => res.json(usersTags))

	// getMatching(req, tags)
	// 	.then(resp => res.json(resp))
	// 	.catch(errData => {
	// 		console.log('errData', errData)
	// 		res.sendStatus(errData.status)
	// 	})
}

export default searchTagsRouter

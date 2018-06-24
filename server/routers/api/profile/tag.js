import express from 'express'
import { addTag, removeTag } from '../../../controllers/profile'
import { updateTags as updateTagsInElastic } from '../../../controllers/elastic'
import authMiddleware from '../../../middleware/auth'

const tagRouter = express.Router()


tagRouter.post('/tag/save', authMiddleware, (req, res, next) => {
	const { tagName, tagType, tagsNames } = req.body
	let okResponse

	addTag(tagType, tagName, req)
		.then(resp => {
			// update elastick service
			okResponse = resp
			return updateTagsInElastic(req, tagsNames)
		})
		.then(() => {
			res.json(okResponse)
		})
		.catch(err => next(err))
})

tagRouter.post('/tag/remove', authMiddleware, (req, res, next) => {
	const { userTagId, tagsNames } = req.body
	let okResponse

	removeTag(userTagId)
		.then(resp => {
			// update elastick service
			okResponse = resp
			return updateTagsInElastic(req, tagsNames)
		})
		.then(() => {
			res.json(okResponse)
		})
		.catch(err => next(err))
})


export default tagRouter

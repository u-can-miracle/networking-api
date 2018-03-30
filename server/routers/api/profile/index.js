import express from 'express'
import { addTag, removeTag } from '../../../controllers/profile'
import { updateTags as updateTagsInElastic } from '../../../controllers/elastic'

const profileRouter = express.Router()


profileRouter.post('/save-tag', (req, res) => {
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
		.catch(errResponse => res.json(errResponse))
})

profileRouter.post('/remove-tag', (req, res) => {
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
		.catch(errResponse => res.json(errResponse))
})


export default profileRouter

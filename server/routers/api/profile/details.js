// Router for updating 'location', 'userName', 'photo' and 'description' fields

import express from 'express'
import * as constants from '../../../constants'
import { updateDetails } from '../../../controllers/profile'
import authMiddleware from '../../../middleware/auth'

const detailsRouter = express.Router()


// TODO Logging best practice
detailsRouter.post('/:field/update', authMiddleware, (req, res, next) => {
	const { field } = req.params

	if(![
		constants.DETAIL_FIELD_LOGIN,
		constants.DETAIL_FIELD_USERNAME,
		constants.DETAIL_FIELD_LOCATION,
		constants.DETAIL_FIELD_DESCRIPTION,
		constants.DETAIL_FIELD_PHOTO
	].includes(field)){
		res.sendStatus(404)
	}

	updateDetails(field, req)
		.then(okResult => res.json(okResult))
		.catch(err => next(err))
})

export default detailsRouter

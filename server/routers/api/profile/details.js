// Router for updating 'location', 'userName', 'photo' and 'description' fields

import express from 'express'
import * as constants from '../../../constants'
import { updateDetails } from '../../../controllers/profile'
import authMiddleware from '../../../middlware/auth'

const detailsRouter = express.Router()


// TODO Logging best practice
detailsRouter.post('/:field/update', authMiddleware, (req, res) => {
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
		.catch(err => {
			// TODO logging errors
			console.log('details router err', err)
			res.sendStatus(400)
		})
})

export default detailsRouter

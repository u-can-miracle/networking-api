import * as constants from '../../constants'
import { getJwt, modelCallWrapper } from '../../helpers'
import userModel from '../../db/models/user'
import descriptionModel from '../../db/models/description'
import photoModel from '../../db/models/photo'
import locationModel from '../../db/models/location'

export async function updateDetails(field, req){
	const { userId } = await getJwt(req)

	if(field === constants.DETAIL_FIELD_LOGIN){
		const { login } = req.body

		return modelCallWrapper(
			userModel.updateUserByField, { login }, { 'id': userId }
		)
	} else if(field === constants.DETAIL_FIELD_USERNAME){
		const { userName } = req.body

		return modelCallWrapper(
			userModel.updateUserByField, { userName }, { 'id': userId }
		)

	} else if(field === constants.DETAIL_FIELD_LOCATION){
		const { location } = req.body
		return locationModel.findOrCreateByName(location)
			.then(location => {
				return userModel.updateUserByField(
					constants.DETAIL_FIELD_LOCATION,
					location.id,
					'id',
					userId
				)
			})
		.then(() => {
			return {
				isSuccessful: true,
				payload: { location }
			}
		})
		.catch(err => {
			// TODO: logging error
			console.log('ctrl updateDetails err:', err)
			return { isSuccessful: false }
		})

	} else if(field === constants.DETAIL_FIELD_DESCRIPTION){
		const { description } = req.body
		return modelCallWrapper(
			descriptionModel.update, description, userId
		)

	} else if(field === constants.DETAIL_FIELD_PHOTO){
		const { photoBase64 } = req.body
		return modelCallWrapper(photoModel.update, photoBase64, userId)

	}
}

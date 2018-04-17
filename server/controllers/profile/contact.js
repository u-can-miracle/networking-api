import { modelCallWrapper, getJwt } from '../../helpers'
import contactModel from '../../db/models/contact'


export async function createContact(req, contactType, contactValue){
	const token = await getJwt(req)
	const { userId } = token

	return modelCallWrapper(contactModel.create, contactType, contactValue, userId)
}


export function updateContact(id, contactValue){
	return modelCallWrapper(contactModel.update, id, contactValue)
}


export function removeContact(id){
	return modelCallWrapper(contactModel.remove, id)
}

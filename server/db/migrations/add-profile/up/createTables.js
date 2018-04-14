import { cityFields } from '../../../schemas/City'
import { descriptionFields } from '../../../schemas/Description'
import { photoFields } from '../../../schemas/Photo'
import { contactFields } from '../../../schemas/Contact'

import createConstraint from '../../../../helpers/createConstraint'

export default function(queryInterface){
	return Promise.all([
		queryInterface.createTable('city', {
			...cityFields
		}),
		queryInterface.createTable('description', {
			...descriptionFields
		}),
		queryInterface.createTable('photo', {
			...photoFields
		}),
		queryInterface.createTable('contact', {
			...contactFields
		})
	])
	.then(() => {
		return createConstraint(queryInterface, 'contact', 'userId', 'user')
	})
}

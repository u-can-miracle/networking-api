import { createFK } from '../../../../helpers'

export function createFKLocationId(queryInterface){
	return createFK(queryInterface, 'user', 'location', 'city')
}

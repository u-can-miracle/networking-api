import createFK from '../../createFK'

export function createFKLocationId(queryInterface){
	return createFK(queryInterface, 'user', 'location', 'city')
}

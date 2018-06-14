import { feedbackFields } from '../../schemas/Feedback'

import createFK from '../createFK'

export default function(queryInterface){
	return queryInterface.createTable('feedback', {
		...feedbackFields
	})
	.then(() => createFKUserId(queryInterface))
}

function createFKUserId(queryInterface){
	return createFK(queryInterface, 'feedback', 'userId', 'user')
}

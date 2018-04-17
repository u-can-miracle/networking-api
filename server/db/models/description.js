import Description from '../schemas/Description'


function getByUserId(userId){
	return Description.findOne({
		where: {
			userId
		}
	})
}

function update(description, userId){
	return Description.update({
		description,
	}, {
		where: {
			userId
		}
	})
}


export default {
	getByUserId,
	update
}

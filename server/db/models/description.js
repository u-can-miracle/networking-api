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
		},
		returning: true
	})
	.then(resp => {
		const affectedList = resp[1]
		const updatedEntity = affectedList[0]
		const plainUpdatedEntity = updatedEntity.get({
      plain: true
    })

		return plainUpdatedEntity
	})
}


export default {
	getByUserId,
	update
}

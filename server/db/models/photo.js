import Photo from '../schemas/Photo'


function getByUserId(userId){
	return Photo.findOne({
		where: {
			userId
		}
	})
}

function update(photo, userId){
	return Photo.update({
		photo,
	}, {
		where: {
			userId
		},
		returning: true
	})
	.then(resp => {
		// const affectedAmount = resp[0]
		const affectedList = resp[1]
		const updatedEntity = affectedList[0]
		const plainUpdatedEntity = updatedEntity.get({
      plain: true
    })

		return { photoBase64: plainUpdatedEntity.photo }
	})
}


export default {
	getByUserId,
	update
}

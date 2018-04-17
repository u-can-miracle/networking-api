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
		}
	})
}


export default {
	getByUserId,
	update
}

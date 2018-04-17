import Contact from '../schemas/Contact'


function create(contactType, contactValue, userId){
	return Contact.create({
		contactType, contactValue, userId
	})
	.then(contact => {
		const plainContact = contact.get({
				plain: true
			})

		return plainContact
  })
}

function update(id, contactValue){
	return Contact.update({
		contactValue,
	}, {
		where: {
			id,
		}
	})
	.then(response => {
		const contact = response[1]
		const plainUser = contact.get({
				plain: true
			})

		return plainUser
	})
}

function remove(id){
	return Contact.destroy({
    where: {
      id
    }
  })
}


export default {
	create,
	update,
	remove
}

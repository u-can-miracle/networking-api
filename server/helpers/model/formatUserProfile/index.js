/**
 * @param {Array} rawUserProfile { tagTypeId, tagTypeName }
 * @param {Object} rawUserProfile[0] {
																		 	userName: '' ,
																			location: '',
																			contactType: '',
																			contactValue: '',
																			description: '',
																			photo: ''
																		}
 * @returns {Objcet}
 */
export function formatUserProfile(rawUserProfile){
	const { contactType, contactValue, contactId, ...rest } = rawUserProfile[0]
	const formattedProfile = { ...rest }

	const { length } = rawUserProfile
	const contacts = [{
		id: contactId,
		contactType,
		contactValue
	}]
	for(let i = 1; i < length; i++){
		const oneContact = {
			id: rawUserProfile[i].contactId,
			contactType: rawUserProfile[i].contactType,
			contactValue: rawUserProfile[i].contactValue
		}

		contacts.push(oneContact)
	}

	return { ...formattedProfile, contacts: contacts }
}

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
	// eslint-disable-next-line
	const { contactType, contactValue, contactId, ...rest } = rawUserProfile[0]
	// const formattedProfile = { ...rest }

	const { length } = rawUserProfile
	const contacts = []

	for(let i = 0; i < length && rawUserProfile[i].contactId; i++){
		const { contactId, contactType, contactValue } = rawUserProfile[i]

		const oneContact = {
			id: contactId,
			contactType: contactType,
			contactValue: contactValue
		}

		contacts.push(oneContact)
	}
	const result = { ...rest, contacts: contacts }
	return result
}

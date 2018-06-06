import chai from 'chai'
import {
	formatUserContacts
} from './'

const {
	expect
} = chai


describe('formatUserContacts should return formatted user profile: ', function () {
	it('for all data', () => {
		const inputData = [{
			userName: 'userName' ,
			location: 'location',
			contactId: 'contactId1',
			contactType: 'contactType1',
			contactValue: 'contactValue1',
			description: 'description',
			photo: 'photo'
		}, {
			userName: 'userName' ,
			location: 'location',
			contactId: 'contactId2',
			contactType: 'contactType2',
			contactValue: 'contactValue2',
			description: 'description',
			photo: 'photo'
		}]

		const expectedResult = {
			userName: 'userName' ,
			location: 'location',
			description: 'description',
			photo: 'photo',
			contacts: [{
				id: 'contactId1',
				contactType: 'contactType1',
				contactValue: 'contactValue1'
			}, {
				id: 'contactId2',
				contactType: 'contactType2',
				contactValue: 'contactValue2'
			}]
		}

		expect(formatUserContacts(inputData)).to.deep.equal(expectedResult)
	})

	it('for not full data', () => {
		const inputData = [{
			userName: 'userName' ,
			location: '',
			contactId: null,
			contactType: null,
			contactValue: null,
			description: '',
			photo: ''
		}]
		const expectedResult = {
			userName: 'userName' ,
			location: '',
			description: '',
			photo: '',
			contacts: []
		}

		expect(formatUserContacts(inputData)).to.deep.equal(expectedResult)
	})
})

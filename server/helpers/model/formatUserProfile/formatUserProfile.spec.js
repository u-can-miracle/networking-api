import chai from 'chai'
import {
	formatUserProfile
} from './'

const {
	expect
} = chai


describe('formatUserProfile: ', function () {
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

	it('should return formatted user profile', () => {
		expect(formatUserProfile(inputData)).to.deep.equal(expectedResult)
	})
})

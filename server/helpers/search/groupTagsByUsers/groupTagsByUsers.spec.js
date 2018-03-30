import chai from 'chai'
import {
	groupTagsByUsers
}
from './'

const {
	expect
} = chai


describe('groupTagsByUsers: ', function () {
	const inputData = [{
		tagId: 2,
		tagName: 'foo',
		userTagId: 111,
		tagTypeId: 1,
		userId: 1,
		email: 'login@gmail.com',
		login: 'login'
	}, {
		tagId: 22,
		tagName: 'Node',
		userTagId: 19,
		tagTypeId: 2,
		userId: 5,
		email: 'elonm@gmail.com',
		login: 'ElonMusk'
	}, {
		tagId: 23,
		tagName: 'React',
		userTagId: 55,
		tagTypeId: 2,
		userId: 5,
		email: 'elonm@gmail.com',
		login: 'ElonMusk'
	}, {
		tagId: 26,
		tagName: 'Wind energy',
		userTagId: 17,
		tagTypeId: 1,
		userId: 5,
		email: 'elonm@gmail.com',
		login: 'ElonMusk'
	}, {
		tagId: 27,
		tagName: 'Solar energy',
		userTagId: 18,
		tagTypeId: 1,
		userId: 5,
		email: 'elonm@gmail.com',
		login: 'ElonMusk'
	}, {
		tagId: 3,
		tagName: 'bar',
		userTagId: 112,
		tagTypeId: 2,
		userId: 1,
		email: 'login@gmail.com',
		login: 'login'
	}]

	const expectedResult = [{
		userId: 1,
		email: 'login@gmail.com',
		login: 'login',
		tags: {
			offer: [{
				tagId: 2,
				tagName: 'foo',
				userTagId: 111
			}],
			looking: [{
				tagId: 3,
				tagName: 'bar',
				userTagId: 112
			}]
		}
	}, {
		userId: 5,
		email: 'elonm@gmail.com',
		login: 'ElonMusk',
		tags: {
			offer: [{
				tagId: 27,
				tagName: 'Solar energy',
				userTagId: 18
			}, {
				tagId: 26,
				tagName: 'Wind energy',
				userTagId: 17
			}],
			looking: [{
				tagId: 23,
				tagName: 'React',
				userTagId: 55
			}, {
				tagId: 22,
				tagName: 'Node',
				userTagId: 19
			}]
		}
	}]

	it('should return users array with his/her offer and looking tags array', () => {
		expect(groupTagsByUsers(inputData)).to.deep.equal(expectedResult)
	})
})

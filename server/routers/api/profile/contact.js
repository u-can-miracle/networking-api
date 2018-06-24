import express from 'express'
import {
	createContact,
	updateContact,
	removeContact
} from '../../../controllers/profile'
import authMiddleware from '../../../middleware/auth'

const contactRouter = express.Router()

contactRouter.post('/contact/create', authMiddleware, (req, res, next) => {
	const { contactType, contactValue } = req.body

	createContact(req, contactType, contactValue)
		.then(result => res.json(result))
		.catch(err => next(err))
})

contactRouter.post('/contact/update', authMiddleware, (req, res, next) => {
	const { id, contactValue } = req.body

	updateContact(id, contactValue)
		.then(result => res.json(result))
		.catch(err => next(err))
})

contactRouter.post('/contact/remove', authMiddleware, (req, res, next)=> {
	const { id } = req.body

	removeContact(id)
		.then(result => res.json(result))
		.catch(err => next(err))
})


export default contactRouter

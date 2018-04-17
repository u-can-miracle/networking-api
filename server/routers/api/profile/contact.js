import express from 'express'
import {
	createContact,
	updateContact,
	removeContact
} from '../../../controllers/profile'
import authMiddleware from '../../../middlware/auth'

const contactRouter = express.Router()


contactRouter.post('/contact/create', authMiddleware, (req, res) => {
	const { contactType, contactValue } = req.body

	createContact(req, contactType, contactValue)
		.then(result => res.json(result))
})

contactRouter.post('/contact/update', authMiddleware, (req, res) => {
	const { id, contactValue } = req.body

	updateContact(id, contactValue)
		.then(result => res.json(result))
})

contactRouter.post('/contact/remove', authMiddleware, (req, res) => {
	const { id } = req.body

	removeContact(id)
		.then(result => res.json(result))
})


export default contactRouter

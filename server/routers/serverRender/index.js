import express from 'express'

import getHtmlForAll from '../../controllers/getHtml/getHtmlForAll'
import confirmation from './confirmation'
import profileReview from './profileReview'

const serverRenderRouter = express.Router()

serverRenderRouter.use(confirmation)
serverRenderRouter.use(profileReview)
serverRenderRouter.use((req, res, next) => {
	getHtmlForAll(req, res)
		.then(html => {
			res.send(html)
		})
		.catch(err => next(err))
}) // it's get('*') route should be last

export default serverRenderRouter

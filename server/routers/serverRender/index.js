import express from 'express'

import getHtmlForAll from '../../controllers/getHtml/getHtmlForAll'
import confirmation from './confirmation'

const serverRenderRouter = express.Router()

serverRenderRouter.use(confirmation)
serverRenderRouter.use((req, res) => {
	getHtmlForAll(req, res)
		.then(html => {
			res.send(html)
		})
		.catch(errResp => {
			res.json(errResp)
		})
}) // it's get('*') route should be last

export default serverRenderRouter

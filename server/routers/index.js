import api from './api'
import OAuthLogin from './OAuthLogin'
import serverRender from './serverRender'

import config from '../config/config'
import { postJsonToUrl } from '../helpers'
const { elastic: { url } } = config


export default function rootRouter(app){
  app.use(api)
  app.use(OAuthLogin)

	app.post('/ping', async (req, res) => {
		const elsUrl = `${url}/test`
		console.log('elsUrl', elsUrl)
		const result = await postJsonToUrl(elsUrl, {})

		res.send(result)
	})

  app.get('*', serverRender)
}

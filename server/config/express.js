import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import helmet from 'helmet'
import config from './config'


function appConfig(app){
  // must be first!
  app.use((req, res, next) => {
		console.log('use req.user', req.user)
		next()
	})
  app.use(helmet())
  app.use(compression())

  app.use(bodyParser.json())
	app.use(cookieParser(config.secretCookie))
}

export default appConfig

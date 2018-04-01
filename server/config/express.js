import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import config from './config'


function appConfig(app){
  // must be first!
  app.use(compression())

  app.disable('x-powered-by')

  app.use(bodyParser.json())
	app.use(cookieParser(config.secretCookie))
}

export default appConfig

import 'babel-polyfill'
import express from 'express'

import envConfig from './server/config/config'
import appConfig from './server/config/express'
import authConfig from './server/config/passport'
import rootRouter from './server/routers'

const app = express()


appConfig(app)

authConfig(app)

rootRouter(app)


process.on('uncaughtException', (err) => {
  console.log('Oops! err: ', err) //TODO change to winston
})



app.listen(envConfig.port, function(){
  console.log(`Listening at http://localhost:${envConfig.port}`)
})

export default app

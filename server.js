import 'babel-polyfill'
import express from 'express'

// import envConfig from './server/config/config'
// import appConfig from './server/config/express'
// import errorHandling from './server/config/errorHandling'
// import authConfig from './server/config/passport'
// import rootRouter from './server/routers'
//
// // setup connection and associations
// import './server/db'

const app = express()

//
// appConfig(app)
//
// authConfig(app)
//
// rootRouter(app)
//
// errorHandling(app)
//
//
// process.on('uncaughtException', (err) => {
//   console.log('Oops! err: ', err) //TODO change to winston
// })
//


app.listen(443, function(){
  // console.log(`Listening at http://localhost:${envConfig.port}`)
})
// app.listen(envConfig.port, function(){
//   console.log(`Listening at http://localhost:${envConfig.port}`)
// })

export default app

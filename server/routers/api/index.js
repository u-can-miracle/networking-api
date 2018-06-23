import express from 'express'

import registration from './registration'
import login from './login'
import profile from './profile'
import search from './search'
import feedback from './feedback'
import errorLogging from './errorLogging'

const apiRouter = express.Router()

apiRouter.use(registration)
apiRouter.use(login)
apiRouter.use('/profile', profile)
apiRouter.use(search)
apiRouter.use(feedback)
apiRouter.use(errorLogging)


export default apiRouter

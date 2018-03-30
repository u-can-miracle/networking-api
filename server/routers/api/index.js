import express from 'express'

import registration from './registration'
import login from './login'
import profile from './profile'
import search from './search'

const apiRouter = express.Router()

apiRouter.use(registration)
apiRouter.use(login)
apiRouter.use('/profile', profile)
apiRouter.use(search)


export default apiRouter

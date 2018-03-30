import express from 'express'

import login from './login'
import logout from './logout'

const loginCommonRouter = express.Router()

loginCommonRouter.use(login)
loginCommonRouter.use(logout)


export default loginCommonRouter

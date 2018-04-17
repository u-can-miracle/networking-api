import express from 'express'

import tagRouter from './tag'
import detailsRouter from './details'
import contactRouter from './contact'

const profileRouter = express.Router()

profileRouter.use(tagRouter)
profileRouter.use(contactRouter)
profileRouter.use(detailsRouter)

export default profileRouter

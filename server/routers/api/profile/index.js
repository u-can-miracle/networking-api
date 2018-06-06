import express from 'express'

import tagRouter from './tag'
import detailsRouter from './details'
import contactRouter from './contact'
import profileReview from './profileReview'

const profileRouter = express.Router()

profileRouter.use(tagRouter)
profileRouter.use(contactRouter)
profileRouter.use(detailsRouter)
profileRouter.use(profileReview)

export default profileRouter

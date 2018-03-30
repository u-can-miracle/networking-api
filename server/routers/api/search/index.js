import express from 'express'

import searchTags from './searchTags'

const searchRouter = express.Router()

searchRouter.use(searchTags)

export default searchRouter

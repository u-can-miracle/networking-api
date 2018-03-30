import { postJsonToUrl } from './.'
import config from '../config/config'

const url = `${config.web.url}${config.web.getDefaultStatePath}`

export const getDefaultState = () => postJsonToUrl(url)

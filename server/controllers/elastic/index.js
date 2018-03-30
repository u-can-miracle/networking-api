import config from '../../config/config'
import sendMsgToElastic from './sendMsgToElastic'

const { elastic: { update, search } } = config


/**
 * @param {req} Object
 * @param {tags} Array ['']
 * @returns Promise
 */
export const updateTags = (req, tags) => {
	return sendMsgToElastic(update, req, tags)
}


/**
 * @param {req} Object
 * @param {tags} Array ['']
 * @returns Promise
 */
export const getMatchedUsers = (req, tags) => {
	return sendMsgToElastic(search, req, tags)
}

import path from 'path'
import bunyan from 'bunyan'
import _ from 'lodash'

import config from './config'
import { waitUntilCreateLogsIfNotExist } from '../helpers'

const { logger: { logsFolder, logsFile } } = config

waitUntilCreateLogsIfNotExist()

export const logger = bunyan.createLogger({
  name: config.logger.name,
  level: config.logger.level,
  serializers: {
		time: time => ({ time }),
    err: err => ({
      message: err.message,
      stack: err.stack,
      json: err.json,
    }),
    req: req => ({
      method: req.method,
      url: req.url,
      body: req.body,
      query: req.query,
      headers: _.omit(req.headers, [ ' Authorization' ])
    }),
  },
  streams: [
		{
			level: 'info',
      stream: process.stdout
    },
		{
			level: 'error',
      stream: process.stderr
    },
    {
			type: 'rotating-file',
      level: 'error',
			period: '1d',   // daily rotation
      count: 3,
      path: path.resolve(logsFolder, logsFile)  // log ERROR to a file
    }
  ],
})

export default async function errorHandling(app) {
	// eslint-disable-next-line
	app.use(function(err, req, res, next) {
		const time = new Date()

		logger.error({ time, err, req })

		res.status(500)

		if(req.method === 'GET'){
			res.redirect('/')
		} else {
			res.json({
				isSuccessful: false,
				errorTime: time
			})
		}
	})
}

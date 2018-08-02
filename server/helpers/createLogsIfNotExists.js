import fs from 'fs'
import path from 'path'

import config from '../config/config'

const { logger: { logsFolder, logsFile } } = config

const logsFolderPathRelative = path.relative(__dirname, logsFolder)
const logsFilePathRelative = path.relative(__dirname, logsFile)
const logsFolderPath = path.resolve(__dirname, logsFolderPathRelative)
const logsFilePath = path.resolve(__dirname, logsFilePathRelative)

export async function waitUntilCreateLogsIfNotExist(){
	await createLogFolderIfNotExist()
	.then(() => createLogFileIfNotExist())
	.catch(err => {
		console.log('waitUntilCreateLogsIfNotExist err', err)
	})
}

function createLogFolderIfNotExist(){
	try {
		fs.readdirSync(logsFolderPath)
	} catch(err) {
		if(err.code === 'ENOENT'){
			try {
				fs.mkdirSync(logsFolderPath)
			} catch(err) {
				console.log('mkdirSync err', err)
			}
		} else {
			// handle unexpected err
			console.log('readdirSync err', err)
		}
	}
}

function createLogFileIfNotExist(){
	try {
		fs.openSync(logsFilePath, 'r')
	} catch(err) {
		if(err.code === 'ENOENT'){
			fs.closeSync(fs.openSync(logsFilePath, 'w'))
		}

		console.log('openSync unexpected error')
	}
}

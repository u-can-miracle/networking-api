import fs from 'fs'
import path from 'path'

import config from '../config/config'

const { logger: { logsFolder, logsFile } } = config

const logsFolderPathRelative = path.relative(__dirname, logsFolder)
const logsFilePathRelative = path.relative(__dirname, logsFile)
const logsFolderPath = path.resolve(__dirname, logsFolderPathRelative)
const logsFilePath = path.resolve(__dirname, logsFilePathRelative)

export async function waitUntilCreateLogsIfNotExist(){
	try {
		await createLogFolderIfNotExist()
		await createLogFileIfNotExist()
	} catch (err) {
		console.log('waitUntilCreateLogsIfNotExist err', err)
	}
}

async function createLogFolderIfNotExist(){
	return new Promise((resolve, reject) => {
		try {
			fs.readdirSync(logsFolderPath)
			resolve()
		} catch(err) {
			if(err.code === 'ENOENT'){
				try {
					fs.mkdirSync(logsFolderPath)
					resolve()
				} catch(err) {
					reject(err)
				}
			} else {
				reject(err)
			}
		}
	})
	// try {
	// 	fs.readdirSync(logsFolderPath)
	// } catch(err) {
	// 	if(err.code === 'ENOENT'){
	// 		try {
	// 			fs.mkdirSync(logsFolderPath)
	// 		} catch(err) {
	// 			console.log('mkdirSync err', err)
	// 		}
	// 	} else {
	// 		// handle unexpected err
	// 		console.log('readdirSync err', err)
	// 	}
	// }
}

function createLogFileIfNotExist(){
	return new Promise((resolve, reject) => {
		try {
			fs.openSync(logsFilePath, 'r')
			resolve()
		} catch(err) {
			if(err.code === 'ENOENT'){
				fs.closeSync(fs.openSync(logsFilePath, 'w'))
				resolve()
			}
			reject(err)
		}
	})
	// try {
	// 	fs.openSync(logsFilePath, 'r')
	// } catch(err) {
	// 	if(err.code === 'ENOENT'){
	// 		fs.closeSync(fs.openSync(logsFilePath, 'w'))
	// 	}
	//
	// 	console.log('openSync unexpected error')
	// }
}

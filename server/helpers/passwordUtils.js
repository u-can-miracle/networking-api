import crypto from 'crypto'
import bcrypt from 'bcrypt'


export function cryptPassword(password) {
  return new Promise(function(resolve, reject) {
    bcrypt.hash(password, 10, function(err, hash) {
      if (err) {
				console.log('helpers passwordUtils cryptPassword err', err)
				return reject(err)
			}
      return resolve(hash)
    })
  })
}


export function createHash(){
	var hash = crypto.randomBytes(16).toString('hex')

	return hash
}


export function comparePassword(plainTextPassword, hash){
	// Load hash from your password DB.
	return bcrypt.compare(plainTextPassword, hash)
}

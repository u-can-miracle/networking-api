module.exports = {
	'development': {
		'username': process.env.DB_USER,
		'password': process.env.DB_PASS,
		'database': process.env.INITIAL_DB,
		'host': process.env.DB_HOST,
		'port': process.env.DB_PORT,
		'dialect': 'postgres'
	},
	'test': {
		'username': process.env.DB_USER,
		'password': process.env.DB_PASS,
		'database': process.env.INITIAL_DB,
		'host': process.env.DB_HOST,
		'port': process.env.DB_PORT,
		'dialect': 'postgres'
	},
	'production': {
		'username': process.env.DB_USER,
		'password': process.env.DB_PASS,
		'database': process.env.INITIAL_DB,
		'host': process.env.DB_HOST,
		'port': process.env.DB_PORT,
		'dialect': 'postgres'
	}
}

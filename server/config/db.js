module.exports = {
	'development': {
		'username': 'postgres',
		'password': 'postgres',
		'database': 'network_dev',
		'host': '127.0.0.1',
		'port': '5432',
		'dialect': 'postgres'
	},
	'test': {
		'username': 'postgres',
		'password': 'postgres',
		'database': 'network_test',
		'host': '127.0.0.1',
		'port': '5432',
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

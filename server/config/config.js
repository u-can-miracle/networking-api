const envConfig = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 5001,
	secretToken: 'token-secret',
	secretCookie: 'cookie-secret',
  web: {
    url: process.env.WEB_URL || 'http://localhost:5000',
    getDefaultStatePath: process.env.GET_DEFAULT_STATE_PATH || '/get-default-state',
    getAppAndState: process.env.GET_APP_AND_STATE_PATH || '/get-app-html'
  },
	elastic: {
		url: process.env.ES_URL || 'http://localhost:5002',
		update: process.env.UPDATE || '/update-tags',
		search: process.env.UPDATE || '/search-users-by-tags'
	},
	fbCallback: 'http://localhost:5000/auth/facebook/callback',
	fbClientId: '1755615741425280',
	fbClientSecret: 'a15c1414a9a317cd5157e6d31468e291',

	googleCallback: 'http://localhost:5000/auth/google/callback',
	googleClientId: '630645220396-ccsdis0g102l1fta6kc5uju1qb0eaai1.'+
									'apps.googleusercontent.com',
	googleSecret: '6nl8M0FXVtQ5jmzhc65o5msA'
}

export default envConfig

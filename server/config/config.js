const envConfig = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 5001,
	secretToken: process.env.TOKEN_SECRET || 'token-secret',
	secretCookie: process.env.COOKIE_SECRET || 'cookie-secret',
	logger: {
		name: 'networking-logger',
		level: 'error',
		logsFolder: './logs',
		logsFile: './errors.log'
	},
  web: {
		domain: process.env.WEB_DOMAIN_NAME,
		protocol: process.env.WEB_PROTOCOL || 'http',
    url: process.env.WEB_URL || 'http://localhost:5000',
    getDefaultStatePath: '/get-default-state', //+'/get-default-state'
    getAppAndState: '/get-app-html' //+ '/get-app-html'
  },
	elastic: {
		url: process.env.ES_URL || 'http://localhost:5002',
		update: '/update-tags',
		search: '/search-users-by-tags'
	},
	emailAddress: process.env.EMAIL_ADDRESS,
	emailPass: process.env.EMAIL_PASS,
	fbCallback: process.env.FB_CALLBACK || 'http://localhost:5000/auth/fb/callback',
	fbClientId: process.env.FB_CLIENT_ID,
	fbClientSecret: process.env.FB_CLIENT_SECRET,

	googleCallback: process.env.GOOGLE_CALLBACK || 'http://localhost:5000/auth/google/callback',
	googleSecret: process.env.GOOGLE_SECRET,
	googleClientId: process.env.GOOGLE_CLIENT_ID
}

export default envConfig

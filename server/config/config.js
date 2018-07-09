const envConfig = {
  env: process.env.NODE_ENV,  //+ production
  port: process.env.PORT, //+ 5001
	secretToken: process.env.TOKEN_SECRET, //+ token-secret
	secretCookie: process.env.COOKIE_SECRET, //+ cookie-secret
	logger: {
		name: 'networking-logger',
		level: 'error'
	},
  web: {
    url: process.env.WEB_URL, //+ 'http://localhost:5000'
    getDefaultStatePath: '/get-default-state', //+'/get-default-state'
    getAppAndState: '/get-app-html' //+ '/get-app-html'
  },
	elastic: {
		url: process.env.ES_URL, //+ 'http://localhost:5002'
		update: '/update-tags', // '/update-tags'
		search: '/search-users-by-tags' // '/search-users-by-tags'
	},
	fbCallback: process.env.FB_CALLBACK, //+ 'http://localhost:5000/auth/fb/callback'
	fbClientId: process.env.FB_CLIENT_ID, //+ '1755615741425280'
	fbClientSecret: process.env.FB_CLIENT_SECRET, //+ 'a15c1414a9a317cd5157e6d31468e291'

	googleCallback: process.env.GOOGLE_CALLBACK, //- 'http://localhost:5000/auth/google/callback'
	googleSecret: process.env.GOOGLE_SECRET, //- '6nl8M0FXVtQ5jmzhc65o5msA'

	//'630645220396-ccsdis0g102l1fta6kc5uju1qb0eaai1.apps.googleusercontent.com'
	googleClientId: process.env.GOOGLE_CLIENT_ID //-
}

export default envConfig

import npmRun from 'npm-run'

const migrationName = process.argv[2]

npmRun.exec(
	`./node_modules/.bin/babel-node ./node_modules/.bin/sequelize db:migrate ${migrationName}`
)

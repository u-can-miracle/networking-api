import npmRun from 'npm-run'

const migrationName = process.argv[2]

npmRun.exec(`./node_modules/.bin/sequelize migration:create --name ${migrationName}`)

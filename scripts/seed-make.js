import npmRun from 'npm-run'

const seedName = process.argv[2]

npmRun.exec(`./node_modules/.bin/sequelize seed:create --name ${seedName}`)

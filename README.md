## Starting application
1. Install dependencies `yarn install` or `npm i`
2. If you start server first time execute `npm run migrate`
3. Start server `npm run start:dev`


## Guide
#### DB
1. For creating specific migration execute
```
npm run migration:make migration-name
```
This will create `20180414073437-migration-name.js` file

2. To apply specific migration run
```
./node_modules/.bin/babel-node ./node_modules/.bin/sequelize db:migrate 20180414073437-migration-name
```
3. To undo specific migration execute
```
./node_modules/.bin/babel-node ./node_modules/.bin/sequelize db:migrate:undo 20180414073437-migration-name
```

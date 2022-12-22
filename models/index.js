const Sequelize = require('sequelize')
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')['development'];
const Drink = require('./drink');
const Vote = require('./vote');

const db = {};
const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
)

db.sequelize = sequelize;

// model 생성
db.Drink = Drink;
db.Vote = Vote;


// model init
Drink.init(sequelize);
Vote.init(sequelize);

// Drink.associate(db);
Vote.associate(db)

// Object.keys(db).forEach((modelName) => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

module.exports = db;

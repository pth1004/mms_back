const { Sequelize } = require('sequelize')
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')['development'];
const Drink = require('./drink');
const Ipstore = require('./ipstore');

const db = {};
const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
)

db.sequelize = sequelize;

// model 생성
db.Drink = Drink;
db.Ipstore = Ipstore;


// model init
Drink.init(sequelize);
Ipstore.init(sequelize);

Drink.associate(db)
Ipstore.associate(db)

module.exports = db;

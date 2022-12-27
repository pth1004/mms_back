const Sequelize = require('sequelize');

module.exports = class Ipstore extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      ip: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      like: {
        type: Sequelize.INTEGER,
        allowNull: true
      }
    }, {
      sequelize,
      underscored: true, // true: underscored, false: camelCase
      timestamps: true, // createAt, updatedAt
      paranoid: true, // deletedAt
      modelName: 'Ipstore',
      tableName: 'ipstores',
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci'
    })
    
  }
  static associate(db) {
    db.Ipstore.belongsTo(db.Drink, { foreignKey: 'drinkId', targetKey:'id' });
  }
};



const Sequelize = require('sequelize');

module.exports = class Vote extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      drinkId: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      like: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      dislike: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    }, {
      sequelize,
      underscored: true, // true: underscored, false: camelCase
      timestamps: true, // createAt, updatedAt
      paranoid: true, // deletedAt
      modelName: 'Vote',
      tableName: 'votes',
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci'
    });
  }
  static associate(db) {
    db.Vote.belongsTo(db.Drink, { foreignKey: { name: 'drinkId', as: 'Drink' } });
  } 
};


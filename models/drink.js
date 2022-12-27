const Sequelize = require('sequelize');

module.exports = class Drink extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      category: {
        type: Sequelize.ENUM("Coffee","Tea","Non-Coffee"),
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      store: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      keyword: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      img: {
        type: Sequelize.STRING, 
        allowNull: true,
      },
    }, {
      sequelize,
      underscored: true, // true: underscored, false: camelCase
      timestamps: true, // createAt, updatedAt
      paranoid: true, // deletedAt
      modelName: 'Drink',
      tableName: 'drinks',
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci'
    });
  }
  static associate(db) {
    db.Drink.hasMany(db.Ipstore, { foreignKey : 'drinkId', sourceKey :'id'  });
  }
};


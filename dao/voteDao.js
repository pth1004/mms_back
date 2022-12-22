const { Drink } = require('../models/index');

const dao = {
  currentValue(params) {
    return new Promise((resolve, reject) => {
      Drink.findOne({
        where: {
          id : params.id
        }
      }).then((currentValue) => {
        resolve(currentValue);
      }).catch((err) => {
        reject(err);
      });
    });
  },

  update(params) {
    return new Promise((resolve, reject) => {
      Drink.update(
        params, {
          where: { 
            id: params.id,
        },},
      ).then(([updated]) => {
        resolve({ updated });
      }).catch((err) => {
        reject(err);
      });
    });
  },
}

module.exports = dao;
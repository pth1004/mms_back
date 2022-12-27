const { Ipstore } = require('../models/index');

const dao = {
  currentValue(params) {
    return new Promise((resolve, reject) => {
      Ipstore.findOne({
        where: {
          id: params.id
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
      Ipstore.update(
        params
      ).then(([updated]) => {
        resolve({ updated });
      }).catch((err) => {
        reject(err);
      });
    });
  },

  insert(params) {
    return new Promise((resolve, reject) => {
      Ipstore.create(params).then((inserted) => {
        resolve(inserted);
      }).catch((err) => {
        reject(err);
      });
    });
  },

  cancle(params) {
    return new Promise((resolve, reject) => {
      Ipstore.destroy({
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

  countlike(params) {
    return new Promise((resolve, reject) => {
      Ipstore.count({
        where: {
          drinkId: params.drinkId,
          like : 1
        }
      }).then((likecnt) => {
        resolve(likecnt);
      }).catch((err) => {
        reject(err);
      });
    });
  },
}

module.exports = dao;
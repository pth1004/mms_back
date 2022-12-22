const logger = require('../lib/logger');
const drinkDao = require('../dao/drinkDao');

const service = {
  //음료 검색
  async list(params) {
    let result = null;

    try {
      result = await drinkDao.selectList(params);
      logger.debug(`(drinkService.list) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(drinkService.list) ${err.toString()}`);
      return new Promise((reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },
  //음료 등록
  async registry(params) {
    let inserted = null;

    try {
      inserted = await drinkDao.insert(params);
      logger.debug(`(drinkService.registry) ${JSON.stringify(inserted)}`);
    } catch (err) {
      logger.error(`(drinkService.registry) ${err.toString()}`);
      return new Promise((reject) => {
        reject(err);
      });
    }
    
    return new Promise((resolve) => {
      resolve(inserted);
    });
  },

  
};

module.exports = service;

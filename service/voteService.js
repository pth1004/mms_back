const logger = require('../lib/logger');
const voteDao = require('../dao/voteDao');

const service = {
  async recommend(params) {
    let inserted = null;
    drink = await voteDao.currentValue(params)
    drink.like = 1
    console.log(`${params.id}를 좋아요를 눌렀습니다.`)
    try {
      const params2 = {
        id : drink.id,
        drinkId: drink.drinkId,
        ip: drink.ip,
        like: drink.like
      }

      inserted = await voteDao.update(params2);
      logger.debug(`(voteService.reqommend) ${JSON.stringify(inserted)}`);

    } catch (err) {
      logger.error(`(voteService.params) ${err.toString()}`);
      return new Promise((reject) => {
        reject(err);
      });
    }
  },

  //좋아요 삭제
  async norecommend(params) {
    let inserted = null;
    drink = await voteDao.currentValue(params)
    console.log(`${params.id}를 좋아요를 취소하였습니다.`)
    try {
      const params2 = {
        id: drink.id,

      }

      deleted = await voteDao.cancle(params2);
      logger.debug(`(voteService.reqommend) ${JSON.stringify(deleted)}`);

    } catch (err) {
      logger.error(`(voteService.params) ${err.toString()}`);
      return new Promise((reject) => {
        reject(err);
      });
    }
  },
  //ip등록
  async registryip(params) {
    let inserted = null;

    try {
      inserted = await voteDao.insert(params);
      logger.debug(`(voteService.registry) ${JSON.stringify(inserted)}`);
      
    } catch (err) {
      logger.error(`(voteService.registry) ${err.toString()}`);
      return new Promise((reject) => {
        reject(err);
      });
    }
    
    return new Promise((resolve) => {
      resolve(inserted);
    });
  },

  //좋아요조회
  async searchlike(params) {
    let inserted = null;
    try {
      inserted = await voteDao.countlike(params);
      logger.debug(`(voteService.search) ${JSON.stringify(inserted)}`);
    }
    catch (err) {
      logger.error(`(voteService.registry) ${err.toString()}`);
      return new Promise((reject) => {
        reject(err);
      });
    }
  }
}
module.exports = service;
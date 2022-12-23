const logger = require('../lib/logger');
const voteDao = require('../dao/voteDao');

const service = {
  async reqommend(params) {
    let inserted = null;
    drink = await voteDao.currentValue(params)

    if (params.like == 1) {
      drink.like += 1
      console.log(`${params.id}를 좋아요를 눌렀습니다.`)
    } if (params.like == 0) {
      drink.like -= 1
      console.log(`${params.id}를 좋아요를 취소하였습니다.`)

    }
    try {
      const params2 = {
        id: params.id,
        like: drink.like
      }

      inserted = await voteDao.update(params2);
      logger.debug(`(voteService.list) ${JSON.stringify(inserted)}`);

    } catch (err) {
      logger.error(`(voteService.list) ${err.toString()}`);
      return new Promise((reject) => {
        reject(err);
      });
    }
  },
  //ip등록
  async registryip(connectip) {
    let inserted = null;

    try {
      inserted = await voteDao.insert(connectip);
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
  }

  }
module.exports = service;
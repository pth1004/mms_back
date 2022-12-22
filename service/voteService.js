const logger = require('../lib/logger');
const voteDao = require('../dao/voteDao');

const service = {
  async reqommend(params) {
    let inserted = null;
    drink = await voteDao.currentValue(params)

    if (params.like) {
      drink.like += 1
      console.log(`${params.id}를 추천하였습니다.`)
    } if(params.dislike) {
      drink.dislike += 1
      console.log(`${params.id}를 비추천하였습니다.`)

    }
     try {
      const params2 = {
        id: params.id,
        like: drink.like,
        dislike: drink.dislike,
      }

      inserted = await voteDao.update(params2); 
      logger.debug(`(voteService.list) ${JSON.stringify(inserted)}`);

    } catch (err) {
      logger.error(`(voteService.list) ${err.toString()}`);
      return new Promise((reject) => {
        reject(err);
      });
    }
  }
}
module.exports = service;
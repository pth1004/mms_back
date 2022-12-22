const express = require('express');
const router = express.Router();
const logger = require('../lib/logger');
const drinkService = require('../service/drinkService')
const upload = require('../lib/uploadphoto')

//음료 검색
router.get('/', async (req, res) => {
  try {
    const params = {
      name: req.query.name,
      store: req.query.store,
      keyword: req.query.keyword
    };
    logger.info(`(drink.list.params) ${JSON.stringify(params)}`);

    const result = await drinkService.list(params);
    logger.info(`(drink.list.params) ${JSON.stringify(result)}`);

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() })
  }
});

//음료 등록
router.post('/', upload.single('img'), async (req, res) => {
  try {
    const params = {
      category : req.body.category,
      name : req.body.name,
      store : req.body.store,
      keyword : req.body.keyword,
      img: req.file.filename,
      like: 0,
      dislike: 0
    };
    logger.info(`(drink.post.params) ${JSON.stringify(params)}`);

    //null 값 체크
     if (!params.name||!params.store||!params.keyword) {
      const err = new Error('Not allowed null');
      logger.error(err.toString());

      return res.status(500).json({ err: err.toString() });
    }

    const result = await drinkService.registry(params);
    logger.info(`(drink.post.result) ${JSON.stringify(result)}`);
    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 삭제기능은 차후 구현
// router.delete('/:id', async (req, res) => {
//   try{
//     const params = {
//       pwd : req.body.pwd
//     }
//   }
// })

module.exports = router;

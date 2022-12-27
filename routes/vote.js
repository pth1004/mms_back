const express = require('express');
const router = express.Router();
const logger = require('../lib/logger');
const voteService = require('../service/voteService');
const requestip = require('request-ip')

//좋아요 조회
router.get('/:drinkId' ,async(req,res) => {
  try {
    params = {
      drinkId : req.params.drinkId
    }
    const likenumber = await voteService.searchlike(params);
    logger.info(`(like.get.params) ${JSON.stringify(likenumber)}`);

    res.status(200).json(likenumber);

  }
  catch (err) {
    res.status(500).json({ err: err.toString() });
  }
})

//좋아요
router.post('/like/:drinkId', async (req, res) => {
  try {
    const params = {
      ip: requestip.getClientIp(req),
      drinkId: req.params.drinkId,
      like: 1
    };

    const inspection = await voteService.registryip(params);
    logger.info(`(ip.update.params) ${JSON.stringify(inspection)}`);


    // 최종 응답
    res.status(200).json();
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

//좋아요 취소
router.delete('/cancellike/:id', async (req, res) => {
  try {
    const params = {
      id: req.params.id,
    };

    logger.info(`(vote.update.params) ${JSON.stringify(params)}`);

    const result = await voteService.norecommend(params);
    logger.info(`(vote.update.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

module.exports = router;
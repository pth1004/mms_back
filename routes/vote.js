const express = require('express');
const router = express.Router();
const logger = require('../lib/logger');
const voteService = require('../service/voteService');

router.put('/:id', async (req, res) => {
  try {
    const params = {
      id: req.params.id,
      like: req.body.like,
      dislike: req.body.dislike,
    };

    logger.info(`(vote.update.params) ${JSON.stringify(params)}`);

    const result = await voteService.reqommend(params);
    logger.info(`(vote.update.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

module.exports = router;
const express = require('express');
const logger = require('../lib/logger');
const drinkRouter = require('./drink');
const voteRouter = require('./vote');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

// logTest
router.get('/log-test', (req, res, next) => {
  logger.error('This message is error');
  logger.warn('This message is warn');
  logger.info('This message is info');
  logger.verbose('This message is verbose');
  logger.debug('This message is debug');
  logger.silly('This message is silly');

  res.send('log test');
});
router.use('/drinks', drinkRouter);
router.use('/votes', voteRouter);

module.exports = router;

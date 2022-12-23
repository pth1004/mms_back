// const requestip = require('request-ip')
// const logger = require('./logger');


// const ipcheck = ((req, res, next) => {
//   const connectip = requestip.getClientIp(req)
//   console.log(connectip)
//   if (connectip) {
//     next();
//   } else {
//     const err = new Error('Unauthorized Ip');
//     logger.error(err.toString());

//     res.status(401).json({ err: err.toString() });
//   }
// })

// module.exports = ipcheck
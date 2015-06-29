/*!
 * Moajs Middle
 * Copyright(c) 2015-2019 Alfred Sang <shiren1118@126.com>
 * MIT Licensed
 */
module.exports = function (req, res, next) {
  if(req.method.toLowerCase() == 'head'){
    console.log('[ALIYUN.COM LOG]: SLB health checking....OK...');
    return res.sendStatus(200);
  }
  
  next();
};
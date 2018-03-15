var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  req.db.insert({
    result: req.body,
    ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
  });
  req.db.ensureIndex({ fieldName: 'createdAt', expireAfterSeconds: 3600 }, function (err) { console.log(err); });
  res.sendStatus(200);
});

module.exports = router;

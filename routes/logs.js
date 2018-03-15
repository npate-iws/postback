var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  req.db.find({}).sort({createdAt: -1}).exec(function(err, docs) {
    res.render('logs', { docs: docs });
  })
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('太难了');
});

router.get('/username', function(req, res, next) {
  res.send('太难了*2');
});

module.exports = router;

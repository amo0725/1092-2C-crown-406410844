var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown_44', { title: 'Feng Sheng Chun 406410844' });
});

module.exports = router;

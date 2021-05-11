var express = require('express');
var router = express.Router();


const categories = require('../data/categories');
const crownController_44 = require('../controllers/crownController_44');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown2_44', { 
    title: 'Shengchun Feng 406410844 (static)' ,
    data: categories
  });
});

router.get('/homepage', crownController_44.getHomepage);

router.get('/shop_44/:product', crownController_44.getCategoryByProduct);

module.exports = router;

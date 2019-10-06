var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('we on homepage');
  res.render('index', { title: 'Expresss' });
});

module.exports = router;

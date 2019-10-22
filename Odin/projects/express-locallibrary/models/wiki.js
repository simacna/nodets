var express = require('express');
var router = express.Router();

//home page route
router.get('/', function(req, res){
  res.send('Wiki home page');
})

//about page route

router.get('/about', function(req, res){
  res.send('about this wiki');
})

module.exports = router;
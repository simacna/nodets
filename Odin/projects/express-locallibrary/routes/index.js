// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   console.log('we on homepage');
//   res.render('index', { title: 'Expresss' });
// });

// module.exports = router;


const express = require('express');
const router = express.Router();

const messages = [
  {
    text: 'Hey everyone',
    user: 'Alice'
  },
  {
    text: 'Everyone doing well?',
    user: 'Bob'
  }
];

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Mini Messageboard',
    messages: messages
  });
});

/* GET form. */
router.get('/new', (req, res) => {
  res.render('form', { title: 'New Message' });
});

/* POST form. */
router.post('/new', (req, res) => {
  messages.push({
    text: req.body.text,
    user: req.body.user
  });
  res.redirect('/');
});

module.exports = router;
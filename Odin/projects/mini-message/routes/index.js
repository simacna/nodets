// var express = require('express');
// var router = express.Router();


// const messages = [{text: 'hi', user: 'sina', added: new.Date()}];
//  GET home page. 
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'mini messageboard', messges: messages });
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

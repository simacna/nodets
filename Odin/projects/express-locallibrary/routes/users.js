var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

//right now the route is /users/cool, but if
//change app.use('/', usersRouter); in app.js
//to have /users, below i can get rid of the /users
//and only have /cool

//below the '/users/cool' for example is called 
// 'middlewear function, mounted']
// console.log('test to see if morgans running'); //lol no


router.get('/users/cool', (req, res) => {
  res.send('hola hola');
});

module.exports = router;


// var express = require('express');
// var router = express.Router();

// router.get('/', (req, res, next)=> {
//   res.send('yo!');
// })



//ex from express tutorial
//how does one kno all methods attached to a 
//req or response

// app.use('user/:id', (req, res, next)=>{
//   console.log(req.originalURL)
// }, (req, res, next)=>{
//   console.log(req.method);
// })















var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var wiki = require('./wiki.js');
//[line below] right before simacna there's a double slash
//which was making everything after a comment so i added a double comma
var mongoDB = "mongodb+srv://simacna:<S365663s>@expresstutorial-pznfm.mongodb.net/admin?retryWrites=true&w=majority)";


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


//express appliction object
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/', usersRouter);
app.use('/wiki', wiki);
// catch 404 and forward to error handler
app.use(function(req, res, next) {

  //why won't return(createError(404)); work?
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

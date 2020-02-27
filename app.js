var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const passport = require('passport')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

const dbConfig = require('./Api/v1.0/Config/DB');

mongoose.connect(dbConfig.detabase, {useNewUrlParser:true})
.then(()=>{
    console.log(`Deatebase connected successfully ${dbConfig.detabase}`);
})
.catch(error =>{
    console.log(error);
})


var app = express();
app.use(bodyParser.json());
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

const route_v1 = require('./routes/Route_v1.0');
route_v1(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
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

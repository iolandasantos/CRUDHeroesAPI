var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var expressValidator = require('express-validator');
// Import Body parser
let bodyParser = require('body-parser');

var heroesRouter = require('./routes/heroes');
var studiosRouter = require('./routes/studios');
var apiRouter = require('./routes/api-routes');

mongoose.Promise = global.Promise;



mongoose.connect('mongodb://acesso_api:2h0p9REK@ds147436.mlab.com:47436/heroku_fv7n4vjn', { useNewUrlParser: true })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

var indexRouter = require('./routes/index');

var app = express();

// Configure bodyparser to handle post requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
/* configurar o middleware express-validator */
app.use(expressValidator());

app.use('/', indexRouter);
app.use('/heroes', heroesRouter);
app.use('/studios', studiosRouter);
app.use('/api', apiRouter);


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

var express = require('express');
var usersRouter = require('./routes/users'); 
var customerRouter = require('./routes/customerData');
var billRounter = require('./routes/bill')

var app = express();
const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
//var cookieParser = require('cookie-parser');



//set db 
const db = require('./database/database')
app.set('db', db);


//Routes
app.use('/api', usersRouter);
app.use('/api', customerRouter);
app.use('/api', billRounter);

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

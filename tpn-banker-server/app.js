
var express = require('express');
var usersRouter = require('./routes/users'); 
var customerRouter = require('./routes/customerData');
var billRounter = require('./routes/bill')

var app = express();
const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//app.use(cors());
//var cookieParser = require('cookie-parser');

app.use(cors());


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

// Add request logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next();
});

// Last middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
module.exports = app;

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var index = require('./routes/index');
var users = require('./routes/users');
var admin = require('./routes/admin');

const port = 5000;
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/admin', admin);
app.use((req, res) => {
  return res.status(404).json({"page": "Its a 404 error"});
});
app.use((req, res) => {
  return res.status(500).json({"page":"Its Authorization error"});
});

app.listen(port, (req, res) => {
  console.log(`Listening on PORT:${port}`)
})
module.exports = app;

'use strict';

// *** dependencies *** //
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const createError = require('http-errors');
const config = require('config');
const databaseConfig = require('./database');
const routeConfig = require('./routes/index');
const morgan = require('morgan');

// *** express instance *** //
const app = express();

// *** app middleware *** //
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/json'}));

// Configure database connection
databaseConfig.init(config.get("database"));

routeConfig.init(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  next(createError(err.status));
});

module.exports = app;

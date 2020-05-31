
const express = require('express');
const logger = require('morgan');

const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    next();
})


app.use(require('./routes'));


module.exports = app;

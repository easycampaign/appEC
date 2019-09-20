var express = require('express'),
    consign = require('consign'),
    path = require('path');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('public'));

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .into(app);

module.exports = app;

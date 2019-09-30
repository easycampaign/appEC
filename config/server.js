var express = require('express'),
    consign = require('consign'),
    path = require('path');

var appInsights = require('applicationinsights')
appInsights.setup("7cdaa886-cb95-4f85-90a9-1cd9a7a8d215").start()

var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/controllers')
    .then('app/models')
    .into(app);

module.exports = app;

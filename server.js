var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var _ = require('lodash');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

app.use(function (req,res,next) {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers','Content-Type');
    next();
});

mongoose.connect('mongodb://cybertronpharmacy:whatbroughtu2me@ds123351.mlab.com:23351/cybertronpharmacydb');
var db = mongoose.connection;

app.models=require('./server/models/index');

var routes = require('./server/routes.js');
_.each(routes,function (controller,route) {
    app.use(route,controller(app,route));
});

app.get('/login', function(req, res) {
    res.sendFile( __dirname + "/www/index.html" );
});

app.use('/js',express.static(__dirname+'/www/js'));

app.listen(3000);
console.log('Running on port 3000...');



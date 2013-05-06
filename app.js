var express = require('express'),
    app = express(),
    http = require('http'),
    compass = require('node-compass'),
    path = require('path'),
    util = require('util');

app.locals = app.locals || {};
app.locals.npBase = 'http://localhost:3000/';
app.locals.title = 'Foundation 4.1.5 on nodejs';

app.configure('development', function() {
  app.use(express.errorHandler());
});
app.configure(function() {
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.compress());
  app.use(app.router);
  app.use(compass());
  app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/', function(req, res){
    res.render('index.jade');
});

var server = app.listen(3000);
console.log('Express server started on port %s', server.address().port);
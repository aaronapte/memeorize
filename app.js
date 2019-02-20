
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var upload = require('./routes/upload');
var login = require('./routes/login');
var loggedIn = require('./routes/loggedIn');
var uploadImg = require('./routes/uploadImg');
var subjects = require("./routes/subjects");
var help = require("./routes/help")

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
app.get('/search', index.search);
app.get('/upload', upload.viewUpload);
app.get('/uploadImg', uploadImg.addFriend);
app.get('/login', login.viewLogin);
app.get('/loggedIn',loggedIn.viewLoggedIn);
app.get('/loginSearch', loggedIn.loginSearch);
app.get('/subjects', subjects.viewSubjects);
app.get('/help', help.viewHelp);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

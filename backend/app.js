var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var store = new session.MemoryStore();
var mongoose = require('mongoose');
var routes = require('./routes/index');
var chatRoutes = require('./routes/chat');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(session({
    secret: 'mortgate', 
    name: 'mortgate.sid', 
    resave: false, 
    saveUninitialized: false,
    store : store
}));
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.post('/api/chats', chatRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

// Configuration of chat
io.on('connection', function(socket) {
    console.log('A client has just connected!!');
    socket.emit('server-to-client-message', 'Hi how may I help you?');

    socket.on('client-to-server-message', function(message) {
        console.log('Server received a message: ' + message);

        socket.emit('server-to-client-message', 'Sorry, did you just say:' + message + '?');
    });


});

var mortgateListening = function() {
    console.log('Mortgate listening on *:3001');
}
server.listen(3001, mortgateListening);
module.exports = app;

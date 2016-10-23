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

function isItANegativeAnswer(message) {
    return compareStringsIgnoringCase(message, 'no', true);
}

function compareStringsIgnoringCase(string1, string2, ignoreCase) {
    if (ignoreCase) {
        string1 = string1.toLowerCase();
        string2 = string2.toLowerCase();
    }

    return string1 === string2;
}


// ----------------- Questions

var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var question0 = {
    pos: 0,
    question: 'Do you know anything about mortgages?',
    answer: null,
    no_compl: 'A mortgage is used by purchasers of real property to raise funds to buy real estate. The loan is "secured" on the borrowers property. This means that a legal mechanism is put in place which allows the lender to take possession and sell the secured property ("foreclosure" or "repossession") to pay off the loan in the event that the borrower defaults on the loan or otherwise fails to abide by its terms.',
    yes_compl: 'Alright so you know it!'
};
var question1 = {
    pos: 1,
    question: 'Ok, may I collect some personal data in order to present the best mortgage for you?',
    answer: null,
    no_ends_conversation: true,
    no_compl: 'Ohh, ok, see you then',
    yes_compl: 'Ok, I promise it will not take much time'
};
var question2 = {
    pos: 2,
    question: 'What is your family annual income?',
    answer: null
};
var question3 = {
    pos: 3,
    question: 'What is your House value?',
    answer: null
};
var question4 = {
    pos: 4,
    question: 'Do you have a credit Report?',
    answer: null,
    no_skip_next_question: true,
    no_compl: 'No problem!',
    yes_compl: 'Cool'
};
var question5 = {
    pos: 5,
    question: 'What is your credit score?',
    answer: null
};
var question6 = {
    pos: 6,
    question: 'What is the zip code of the house?',
    answer: null
};
var question7 = {
    pos: 7,
    question: 'What kind of product are you looking for? All, 10 year fixed, 15 year fixed, 5/1 ARM or 7/1 ARM',
    answer: null,
    no_compl: 'Ok',
    yes_compl: 'OK'
};

var questions = new Array();
questions.push(question0);
questions.push(question1);
questions.push(question2);
questions.push(question3);
questions.push(question4);
questions.push(question5);
questions.push(question6);
questions.push(question7);

// Configuration of chat
io.on('connection', function(socket) {

    var questionCount = 0;
    console.log('A client has just connected!!');
    socket.emit('server-to-client-message', 'Hi I am John, I would like to help you find the best mortgage for you.');
    socket.emit('server-to-client-message', questions[questionCount].question);

    socket.on('client-to-server-message', function(message) {
        console.log('Server received a message: ' + message);

        questions[questionCount].answer = message;

        // Do you know anything about mortgages?
        if (isItANegativeAnswer(message)) {
            if (questions[questionCount].no_compl) {
                socket.emit('server-to-client-message', questions[questionCount].no_compl);
            }
            if (questions[questionCount].no_ends_conversation) {
                // Disconnect.
                socket.disconnect(0);
            }
        } else {
            if (questions[questionCount].yes_compl) {
                socket.emit('server-to-client-message', questions[questionCount].yes_compl);
            }
        }


        if (isItANegativeAnswer(message) && questions[questionCount].no_skip_next_question) {
            questionCount = questionCount + 2;
        } else {
            questionCount = questionCount + 1;
        }

        // If it is not defined, find the best.
        if (questions[questionCount]) {
            socket.emit('server-to-client-message', questions[questionCount].question);
        } else {
            var queryParams = {
                annual_family_income: questions[2].answer,
                house_value: questions[3].answer,
                credit_score: questions[5].answer,
                zip_code: questions[6].answer,
                product: questions[7].answer
            };

            //query
            socket.emit('server-to-client-message', 'The best options for you are:' + questions);
            socket.emit('server-to-client-message', 'We are going send them your data and expect their call any moment now.');
            socket.disconnect(0);
        }

    });

});

var mortgateListening = function() {
    console.log('Mortgate listening on *:3001');
}
server.listen(3001, mortgateListening);
module.exports = app;

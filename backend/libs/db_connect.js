var mongoose = require('mongoose');
var single_connection;

var env_url = {
    'test' : 'mongodb://localhost/mortgate_test',
    'development' : 'mongodb://localhost/mortgate'
};

module.exports = function() {
    var url = env_url[process.env.NODE_ENV || env_url.development];
  
    if(!single_connection) {
        single_connection = mongoose.connect('mongodb://localhost/mortgate');
    }
  
    return single_connection;
};
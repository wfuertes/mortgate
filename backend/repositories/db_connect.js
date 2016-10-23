var mongoose = require('mongoose');
var single_connection;

var env_url = {
    'test' : 'mongodb://mortgate:vancouver2016@ds045664.mlab.com:45664/mortgate',
    'development' : 'mongodb://mortgate:vancouver2016@ds045664.mlab.com:45664/mortgate'
};

module.exports = function() {
    var url = env_url[process.env.NODE_ENV || 'development'];

    if(!single_connection) {
        single_connection = mongoose.createConnection(url);
    }

    return single_connection;
};

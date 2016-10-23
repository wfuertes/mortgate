var Chat = require('../models/chat')();

var ChatRepository = function() {
    this._chat = Chat;
}

ChatRepository.prototype.findById = function(id) {
    return new Promise((erro, chat) => {
        this._chat
            .findById(id, (erro, chat) => {
                if(erro) {
                    reject(erro);
                } else {
                    resolve(chat);
                }
            });
    });
}

ChatRepository.prototype.findOne = function(query) {
    return new Promise((resolve, reject) => {
        this._chat
            .findOne(query)
            .select('name email')
            .exec((error, chat) => {
                if(error) {
                    reject(error);
                } else {
                    resolve(chat);
                }
            });
        });
}

ChatRepository.prototype.create = function(chat) {
    return new Promise((resolve, reject) => {
        this._chat
            .create(chat, (error, chat) => {
                if(error) {
                    reject(error);
                } else {
                    resolve(chat);
                }
            });
    });
}

ChatRepository.prototype.addMessage = function(chat, message) {
    return new Promise((resolve, reject) => {
        chat.messages.push(message);

        chat.save(() => {
            resolve();
        });
    });
}

module.exports = new ChatRepository();
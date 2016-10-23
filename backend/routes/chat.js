var express = require('express');
var router = express.Router();

var Chat = require('./../models/chat')();

function prepareSuccessResponse(request, response, chat) {
    request.session.chat = chat;
    response.setHeader("Location", "/api/chats/" + chat.email);
    response.status(201).json("key : " + chat._id);
}

function createChat(req, res) {
    var query = {
        email : req.body.email
    };

    Chat.findOne(query)
        .select('name email')
        .exec((error, chat) => {
            if(error) {
                console.log(error);
                res.status(500).json(erro);
            }

            if(chat) {
                prepareSuccessResponse(req, res, chat);
            } else {
                var newChat = {
                    name : req.body.name,
                    email : req.body.email
                }

                Chat.create(newChat, (error, chat) => {
                    if(error) {
                        console.log(error);
                        res.status(500).json(erro);
                    } else {
                        prepareSuccessResponse(req, res, chat);
                    }
                });
            }
        });
}

router.post('/api/chats', function(req, res) {
    createChat(req, res);
});

module.exports = router;
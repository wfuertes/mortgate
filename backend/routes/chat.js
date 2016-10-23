var repository = require('../repositories/ChatRepository');

function _prepareSuccessResponse(request, response, chat) {
    request.session.chat = chat;
    response.setHeader("Location", "/api/chats/" + chat.email);
    response.status(201).json({key : chat._id});
}

function _prepareErrorResponse(response, error) {
    console.log(error);
    response.status(500).json({error : error});
}

function _createChat(req, res) {
    var query = {
        email : req.body.email
    };

    repository.findOne(query)
        .then(chat => {
            if(chat) {
                _prepareSuccessResponse(req, res, chat);
                return;
            }
            
            var newChat = {
                name : req.body.name,
                email : req.body.email
            }

            repository.create(newChat)
                .then(chat => _prepareSuccessResponse(req, res, chat))
                .catch(error => _prepareErrorResponse(res, error));
        })
        .catch(error => _prepareErrorResponse(res, error));
}

module.exports = (req, res) => {
    _createChat(req, res);
};
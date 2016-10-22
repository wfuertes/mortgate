var express = require('express');
var router = express.Router();

router.post('/api/chats', function(req, res) {
    console.log('aqui');
    res.status(201);
    res.end();
});

module.exports = router;
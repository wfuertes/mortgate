// Opens connection to socket
var socket = io("http://127.0.0.1:3001");

socket.on('connection', function(socket) {
    console.log('Connected to server!');
});

socket.on('server-to-client-message', function(msg) {
    console.log('receving message');

    var ul = document.getElementById('messages');
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(msg));
    ul.appendChild(li);
});

function sendMessageToServer() {
    var messageInputField = document.getElementById("message-input-field");
    socket.emit('client-to-server-message', messageInputField.value);
    messageInputField.value = '';
    return false;
}

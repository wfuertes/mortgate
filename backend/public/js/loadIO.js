// Opens connection to socket
var socket = io("http://127.0.0.1:3000");

socket.on('connection', function(socket) {
    console.log('ui: a user connected');
    // socket.on('disconnect', function() {
    //     console.log('ui: user disconnected');
    // });

});

socket.on('server message', function(msg) {
    console.log('receving message');

    var ul = document.getElementById('messages');
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(msg));
    li.setAttribute("id", "element4"); // added line
    ul.appendChild(li);
});

function sendMsg() {
    socket.emit('chat message', document.getElementById("m").value);
    document.getElementById("m").value = '';
    return false;
}

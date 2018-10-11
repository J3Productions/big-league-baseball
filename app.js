const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('public'));
app.use(express.static('src'));

app.get('/', function(req, res){
	res.sendFile('index.html');
});

io.on('connection', function(socket) {
	console.log("Connection achieved");
});

http.listen(3000, function() {
	console.log("Serving the site at localhost:3000");
});
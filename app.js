const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require("body-parser");
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));
app.use(express.static('src'));

app.get('/', function(req, res){
	res.render('index.ejs');
});

app.post("/createTeam", function(req, res) {
	const location = req.body.location;
	const color = req.body.color;
	res.render("createTeam.ejs", {
		location: location,
		color: color
	});
});

http.listen(3000, function() {
	console.log("Serving the site at localhost:3000");
});
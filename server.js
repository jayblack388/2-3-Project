// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


var tables = [];
var waitlist = [];

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "./html/index.html"));
})

app.get("/reserve.html", function(req, res) {
	res.sendFile(path.join(__dirname, "./html/reserve.html"));
})

app.get("/tables.html", function(req, res) {
	res.sendFile(path.join(__dirname, "./html/tables.html"));
})


app.post('/api/tables/'), function (req, res) {
	let newreservation = req.body;
	console.log(newreservation);
	tables.push(newcharacter);
	res.json(newcharacter);
};

app.post('/api/waitlist/'), function (req, res) {
	let newwaitlist = req.body;
	console.log(newreservation);
	waitlist.push(newcharacter);
	res.json(newcharacter);
};


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
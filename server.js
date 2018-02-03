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


var tables = [
	{
		name: "Bob Goodman",
		email: "bob@bob.com",
		phNumber: "804-555-4451",
		specReservations: "Completely Gluten Free"
	}, {
		name: "Jill Starkes",
		email: "jill@jill.com",
		phNumber: "804-666-4451",
		specReservations: "Vegan"
	}, {
		name: "John Doe",
		email: "john@doe.com",
		phNumber: "804-555-5641",
		specReservations: "Normal Person"
	}, 
];
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

app.get("/api/tables", function(req, res) {
	return res.json(tables)
})

app.post('/api/tables'), function (req, res) {
	let newreservation = req.body;
	console.log(newreservation);
	tables.push(newreservation);
	res.json(newreservation);
};

app.post('/api/waitlist'), function (req, res) {
	let newwaitlist = req.body;
	console.log(newwaitlist);
	waitlist.push(newwaitlist);
	res.json(newwaitlist);
};


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
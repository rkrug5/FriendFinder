// Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var friends = require("./app/data/friends");


// require("./routes/apiRoutes")(app);
// require("./routing/htmlRoutes")(app);


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function (req, res) {
	res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("/api/friends", function (req, res) {
	res.json(friends);
});




// Listener
// ===========================================================
app.listen(PORT, function () {
	console.log("App listening on PORT " + PORT);
});
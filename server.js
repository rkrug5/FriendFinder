// Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var PORT = 3000;


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




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





// Listener
// ===========================================================
app.listen(PORT, function () {
	console.log("App listening on PORT " + PORT);
});
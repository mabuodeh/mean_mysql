(function (){
	"use strict";

	var port = process.env.PORT || 8080;

	var express = require("express");
	var app = express();
	var router = express.Router();

	app.use(express.static('public'));

	app.get('/test', function (req, res) {
		console.log("in test");

		res.sendFile(__dirname + '/public/test.html');
	});

	app.use('/test', router);

	app.listen(port);

	console.log("server started");

}());
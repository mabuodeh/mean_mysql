(function (){
	"use strict";

	var express = require("express");

	var app = express();

	app.get('/', function (req, res) {
		res.sendFile(__dirname + '/public/index.html');
	});

	app.listen(8080);

	console.log("server started");

}());
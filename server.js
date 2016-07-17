(function (){
	"use strict";

	var port = process.env.PORT || 8080;

	var express = require("express");
	var app = express();
	var router = express.Router();
	var bodyParser = require('body-parser');

	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	app.use(express.static('public'));

	router.get('/', function (req, res) {
		console.log("in test");
		res.json("json output");
		//res.sendFile(__dirname + '/public/test.html');
	});

	// template
	// router.route('/pg')
	// 	.get(function (req, res) {
	// 		res.json("pg json get");
	// 	})

	// 	.post(function (req, res) {
	// 		res.json("pg json post");
	// 	});

	router.route('/viewAll')
		.get(function (req, res) {
			res.json("should return all devices");
		});

	router.route('/viewCritical')
		.get(function (req, res) {
			res.json("should return critical devices only");
		});


	app.use('/', router);

	app.listen(port);

	console.log("server started");

}());
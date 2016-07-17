(function (){
	"use strict";

	var port = process.env.PORT || 8080;

	var db = require("./db.js");
	var async = require('async');
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
			// res.json("should return all devices");

			db.get().query('SELECT * FROM test_crud', function(err, rows, fields) {
			  if (err) throw err;
			  res.json("data: " + JSON.stringify(rows));
			});

		});

	router.route('/viewCritical')
		.get(function (req, res) {
			res.json("should return critical devices only");
		});

	app.use('/', router);

	// Connect to Server and MySQL on start
	db.connect(db.MODE_TEST, function(err) {
	  if (err) {
	    console.log('Unable to connect to MySQL.');
	    process.exit(1);
	  } else {
	    app.listen(port, function() {
	      console.log('Listening on port ' + port + '...');
	    });
	  }
	});

}());
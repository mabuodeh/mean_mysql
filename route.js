(function () {
	"use strict";


	var db = require("./db.js");
	var express = require("express");
	var router = express.Router();

	// template
	// router.route('/pg')
	// 	.get(function (req, res) {
	// 		res.json("pg json get");
	// 	})

	// 	.post(function (req, res) {
	// 		res.json("pg json post");
	// 	});

	router.get('/', function (req, res) {
		console.log("in test");
		res.json("json output");
		//res.sendFile(__dirname + '/public/test.html');
	});
	
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

	module.exports = router;

}());
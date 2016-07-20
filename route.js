(function () {
	"use strict";

	var fs = require("fs");
	var db = require("./db.js");
	var express = require("express");
	var router = express.Router();

	var path = "C:\\Users\\user\\Documents\\Etisalat Projects\\Etisalat Bitstream\\etisalat_bitstream\\test\\";

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

				res.json(rows);
			});

		});

	router.route('/viewCritical')
		.get(function (req, res) {
			res.json("should return critical devices only");
		});

	router.route('/updateFile')
		.get(function (req, res) {
			
			fs.readdir(path, function(err, files) {
			    //res.json(files);

			    fs.readFile(path + files[0], "utf-8", function (err, data) {
				   if (err) {
				       return console.error(err);
				   }
				   // data = data.replace(/[^\w\s]/gi, '');
				   res.send(data);
				});
			});

		});

	module.exports = router;

}());
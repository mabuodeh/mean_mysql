(function (){
	"use strict";

	var port = process.env.PORT || 8080;

	var db = require("./db.js");
	var async = require('async');
	// var data = require('./test/data.json');

	var express = require("express");
	var app = express();
	var router = require('./route.js');

	var bodyParser = require('body-parser');

	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	app.use(express.static('public'));

	app.use('/', router);

	var data = {
		tables: {
			test_crud: [
			 {id: 1, test_num: 33, test_string: "a string"},
			 {id: 2, test_num: 5, test_string: "asdf"},
			]
		},
	};

	// Connect to Server and MySQL on start
	db.connect(db.MODE_TEST, function(err) {
		// db.drop(Object.keys(data.tables), function(err) {
		// 	if (err) return console.log(err);
		// 	console.log('Tables have been dropped...');
		// });

		// db.fixtures(data, function(err) {
		// 	if (err) return console.log(err);
		// 	console.log('Data has been loaded...');
		// });
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
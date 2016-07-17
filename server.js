(function (){
	"use strict";

	var port = process.env.PORT || 8080;

	var db = require("./db.js");
	var async = require('async');

	var express = require("express");
	var app = express();
	var router = require('./route.js');
	
	var bodyParser = require('body-parser');

	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	app.use(express.static('public'));

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
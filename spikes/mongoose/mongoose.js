
// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("connected!");


	var kittySchema = mongoose.Schema({
	    name: String
	});

	// NOTE: methods must be added to the schema before compiling it with mongoose.model()
	kittySchema.methods.speak = function () {
	  var greeting = this.name
	    ? "Meow name is " + this.name
	    : "I don't have a name";
	  console.log(greeting);
	}

	var Kitten = mongoose.model('Kitten', kittySchema);

	var silence = new Kitten({ name: 'silence' });
	console.log(silence.name); // 'Silence'

	var fluffy = new Kitten({ name: 'fluffy' });
	fluffy.speak(); // "Meow name is fluffy"

	// console.log("using save function");
	// fluffy.save(function (err, fluffy) {
	//   if (err) return console.error(err);
	//   fluffy.speak();
	// });

	// silence.save(function (err, silence) {
	// 	if(err) return console.error(err);
	// 	silence.speak();
	// })

	Kitten.findOneAndRemove({ name: 'fluffy' }, function(err) {
	  if (err) throw err;

	  // we have deleted the user
	  console.log('fluffy deleted!');
	});
	
	// Kitten.find( {name:'fluffy'}, function (err, kitten) {

	// 	kitten.remove(function(err) {
	// 		if (err) console.log("within kitten.remove");

	// 		console.log("fluffy deleted");
	// 	});

	// });

	console.log("using find function");
	Kitten.find(function (err, kittens) {
	  if (err) return console.error(err);
	  console.log(kittens);
	})




});

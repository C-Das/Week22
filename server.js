var express = require('express');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
PORT = 3000;

var db = mongoose.connection;
var app = express();

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We are connected");
});

var kittySchema = mongoose.Schema({
  name:String
});

var kitten = mongoose.model('kitten',kittySchema);

var silence = new kitten({name:'Silence'});

console.log(silence.name);

app.listen(PORT, function() {
  console.log("Application is listening on PORT:" + PORT);
});

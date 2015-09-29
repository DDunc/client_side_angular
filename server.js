var express = require('express');
var mongoose = require('mongoose');
var app = express();

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/agt');

app.use(express.static(__dirname + '/build'));

app.listen(3000, function(){
  console.log("server is up");
});
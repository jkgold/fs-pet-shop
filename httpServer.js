'use strict';
var fs = require('fs');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/pets', function(req, res){
  fs.readFile("./pets.json", "utf8", function(err, data) {
    if (err){
      throw err
    }
      res.send(JSON.parse(data));

  });
});
app.get('/pets/0', function(req, res){
  fs.readFile("./pets.json", "utf8", function(err, data) {
    if (err){
      throw err
    }
      res.send(JSON.parse(data));

  });
});

app.listen(3000, function(){
  console.log("listening for port 3000");
})

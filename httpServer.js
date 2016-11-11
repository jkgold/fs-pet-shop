'use strict';
var fs = require('fs');
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/pets', function(req, res){
  fs.readFile("./pets.json", "utf8", function(err, data) {
    if (err){
      throw err
    }

  });
});

app.listen(3000, function(){
  console.log("listening for port 3000");
})

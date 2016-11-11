'use strict';

var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(res, req){
  res.send("this is a web page");
});

app.listen('3000', function(){
  console.log("listening for port 3000");
})

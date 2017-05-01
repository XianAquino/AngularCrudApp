var express = require('express');
var path = require('path');
var app = express();
var port = 3033;

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname +  '/../client/index.html'));
});

app.listen(port, function() {
  console.log('Server Listening to port: ' + 3033);
});

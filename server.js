var express = require('express');
var path    = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/scripts', express.static(path.join(__dirname, 'node_modules', 'processing-js')));
app.use('/libs', express.static(path.join(__dirname, 'libs')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(9999, function () {
  console.log('App running on port 9999');
});

/*const express = require('express');
const path = require('path');
const port = process.PORT || 8080;
const app = express();

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);
console.log('Server has started!');*/









var express = require('express');

// Create our app
const PORT = process.env.PORT || 8080;
var app = express();


app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static(__dirname));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
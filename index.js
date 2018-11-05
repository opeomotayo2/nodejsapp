var express = require('express');
var express = require('express');
var app = express();
var app = express();

app.get('/', function (req, res) {
 res.send('<h3>testing nodejsapp sonarqube</h3>');
});

var server = app.listen(3000, function () {
 var host = server.address().address;
 var port = server.address().port;

 console.log('Example app listening at http://%s:%s', host, port);
});

// sudo ipfw -q add 10 allow tcp from any to any 8080 in
// sudo ipfw -q add 20 allow tcp from any to any 8080 out
// sudo ipfw show
// ifconfig // get en0: inet

var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
	buffer = fs.readFileSync('index.html');
  	response.send(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
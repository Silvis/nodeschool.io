var http = require('http');
var map = require('through2-map');
var port = process.argv[2];

var server = http.createServer(function(req, res) {
	req.pipe(map(function(text){
		return text.toString().toUpperCase();
	})).pipe(res);
});

server.listen(port);
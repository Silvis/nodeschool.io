var http = require('http');
var url = require('url');
var port = process.argv[2];

var server = http.createServer(function(req, res) {
    var path = url.parse(req.url).pathname;
    var iso = url.parse(req.url, true).query.iso;

    var d = new Date(iso), obj;

    if (path == "/api/parsetime") {
    	obj = { "hour" : d.getHours(), 
				"minute" : d.getMinutes(), 
				"second" : d.getSeconds() };
    }

    if (path == "/api/unixtime") {
    	obj = { "unixtime" : d.getTime() };
    }

    res.writeHead(200, {"Content-Type": "application/json"});
	res.write(JSON.stringify(obj));
	res.end();
});

server.listen(port);
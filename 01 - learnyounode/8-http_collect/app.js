var http = require('http');
var url = process.argv[2];

var text = "", chars = 0;

http.get(url, function(res) {
	res.setEncoding('utf-8');

	res.on('data', function(data) {
		chars += data.length;
		text += data;
	})

	res.on('error', function(err) {
		console.error(err);
	})

	res.on('end', function() {
		console.log(chars);
		console.log(text);
	})
})
var http = require('http');
var urls = [process.argv[2], process.argv[3], process.argv[4]];
var ended = 0, queue = [];

urls.forEach(function(url, index){
	var text = "";

	http.get(url, function(res) {
		res.setEncoding('utf-8');

		res.on('data', function(data) {
			text += data;
		})

		res.on('error', function(err) {
			console.error(err);
		})

		res.on('end', function() {
			ended++;
			queue[index] = text;

			if (ended == urls.length) {
				queue.forEach(function(t){
					console.log(t);
				});
			}
		})
	});
});
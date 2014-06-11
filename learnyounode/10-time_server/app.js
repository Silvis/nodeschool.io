var net = require('net');
var port = process.argv[2];

function format(part) {
	return (part < 10) ? "0" + part : part;
}

var server = net.createServer(function(socket) {
	var now = new Date();
	var year = now.getFullYear(),
		month = format(now.getMonth()+1),
		day = format(now.getDate()),
		hours = format(now.getHours()),
		minutes = format(now.getMinutes());

	socket.write(year + "-" + month + "-" + day + " " + hours + ":" + minutes + "\n");
	socket.end();
});

server.listen(port);
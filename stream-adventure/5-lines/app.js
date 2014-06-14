var split = require('split');
var through = require('through');
var tr = through(write, end);

var lines = 0;

function write(buf) {
	lines++;

	if ((lines % 2) != 0)
		this.queue(buf.toString().toLowerCase() + "\n");
	else
		this.queue(buf.toString().toUpperCase() + "\n");
};

function end() {
	this.queue(null);
};

process.stdin
	.pipe(split())
	.pipe(tr)
	.pipe(process.stdout);
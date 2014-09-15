/* USING through module */

var through = require('through');
var tr = through(write, end);

function write(buf) {
	this.queue(buf.toString().toUpperCase());
}

function end() {
	this.queue(null);
}

process.stdin.pipe(tr).pipe(process.stdout);


/* USING through2-map module */

/*var map = require('through2-map');

process.stdin.pipe(map(function(text){
	return text.toString().toUpperCase();
})).pipe(process.stdout);*/
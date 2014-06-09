var fs = require('fs');
var file = process.argv[2];

var buf = fs.readFileSync(file);
var str = buf.toString();

// last line does not have a new line character
var newlines = str.split("\n").length-1;
console.log(newlines);
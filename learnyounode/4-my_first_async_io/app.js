var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, function(err, data){
	if (!err) {
		var str = data.toString();
		// last line does not have a new line character
		var newlines = str.split("\n").length-1;
		console.log(newlines);
	}
});
var reader = require('./reader.js');

var dir = process.argv[2];
var ext = process.argv[3];

reader(dir, ext, function(err, files){
	if (err) {
		console.log(err);
	} else {
		for (var i=0; i<files.length; i++)
			console.log(files[i]);
	}
})
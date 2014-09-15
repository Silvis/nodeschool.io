var fs = require('fs');
var path = require('path');

function readDirectory(dir, ext, callback) {
	fs.readdir(dir, function(err, data){
		if (err) {
			callback(err);
		} else {
			var files = [];

			for(var i=0; i<data.length; i++){
				if(path.extname(data[i]) == '.'+ext)
					files.push(data[i]);
			}

			callback(null, files);
		}
	});
}

module.exports = readDirectory;
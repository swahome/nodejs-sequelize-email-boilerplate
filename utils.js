var path = require('path');

module.exports.timestampFilename = (filename) => {
	var baseFileName = path.basename(filename);
	var extension = path.extname(baseFileName).toLowerCase();
	var nameWithoutExt = path
		.basename(baseFileName, extension)
		.replace(/[^a-zA-Z0-9-_]/g, '_');
	var newFileName = `${nameWithoutExt}_${Date.now()}${extension}`;
	return newFileName;
};

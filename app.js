#!/usr/bin/env node

var fs = require('fs'),
	path = require('path');

if (require.main === module) {
	if (process.argv.length < 3) {
		console.log('Usage: node app old-dependency new-dependency');
	} else {
		var directory = process.cwd();

		// get the dependency we want to replace
		var oldDependency = process.argv[2];

		// get what we want to replace the above dependency with
		var newDependency = process.argv[3];

		// read in the package.json and parse it
		var package_json = fs.readFileSync(directory + path.sep + 'package.json', 'ascii');
		package_json = JSON.parse(package_json);
		
		// if the dependencies contains the old dependency...
		if (typeof package_json.dependencies[oldDependency] !== 'undefined' && package_json.dependencies[oldDependency] !== null) {
			// store the version number
			var dependencyVersion = package_json.dependencies[oldDependency];
			// delete the old dependency
			delete package_json.dependencies[oldDependency];
			// add the new one
			package_json.dependencies[newDependency] = dependencyVersion;

			// write the changes to disk
			fs.writeFileSync(directory + path.sep + 'package.json', JSON.stringify(package_json, null, '    '));
			console.log('Complete. Dependency "' + oldDependency + '" renamed to "' + newDependency + '".');
		}
		else {
			console.log('package_json does not contain dependency "' + oldDependency + '".');
		}
	}
}
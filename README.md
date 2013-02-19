Alt-Dependency
==============

A little utility to rename a dependency in an npm package.json file to something else. This can be useful for test builds.

## Install

	npm install -g alt-dependency

## Usage

Move to the directory containing the package.json you want to alter and run the following:

	alt-dependency oldDependency newDependency

The above example would change this:

	"dependencies": { "oldDependency": "1.2.x" }

...to this:

	"dependencies": { "newDependency": "1.2.x" }


## Thanks

Based on [testbuild](https://github.com/alexlatchford/testbuild) by [Alex Latchford](https://github.com/alexlatchford).
Alt-Dependency
==============

A little utility to rename a dependency in a package.json file to something else. This can be useful for test builds.

## Install

	npm install -g alt-dependency

## Usage

	alt-dependency oldDependency newDependency

The above example would change this:

"dependencies": {
    "oldDependency": "1.2.x"
}

...to this:

"dependencies": {
    "newDependency": "1.2.x"
}
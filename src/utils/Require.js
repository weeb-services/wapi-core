'use strict';

const fs = require('fs');
const path = require('path');

class Require {
	static recursive(directory) {
		const dirList = fs.readdirSync(path.resolve(directory));
		const modules = [];

		for (const file of dirList) {
			if (file === 'index.js') {
				continue;
			}

			if (file.endsWith('.js')) {
				modules.push(require(path.resolve(directory, file)));
			} else {
				modules.push(...this.recursive(path.resolve(directory, file)));
			}
		}

		return modules;
	}
}

module.exports = Require;
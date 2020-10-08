'use strict';
const escapeStringRegexp = require('escape-string-regexp');

module.exports = function (string, target, options) {
	if (typeof string !== 'string' || typeof target !== 'string') {
		throw new TypeError('Expected a string');
	}

	options = {
		ignoreCase: false,
		...options
	};

	const flag = options.ignoreCase ? 'gi' : 'g';
	return new RegExp('(?:' + escapeStringRegexp(target) + '){2,}', flag).test(string);
};

// Got this from here: http://allampersandall.blogspot.com/2011/12/hoganjs-expressjs-nodejs.html
// Per the post, update to use consolidate.js when express 3.x comes out
var hogan = require('hogan.js')

function compile(source) {
    return function (options) {
	    var partials = options.partials || {};

	    if (options.body) {
		    partials.body = options.body;
	    }

        return hogan.compile(source, options).render(options, partials);
    };
}

exports.compile = compile;

// Use express
var express = require('express')
, hogan = require('hogan.js')

// Instantiate our app/server
, app = module.exports = express.createServer();

// Now that we have an app, we can call our router
require('./routes/router');

// Configure the server
app.configure(function(){
	app.set('views', __dirname + '/views');

	// Set '.hogan' as the default extension
	app.set('view engine', 'hogan');

	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(__dirname + '/public'));


	app.register('hogan', {
		compile: function (source) {
		    return function (options) {
			    var partials = options.partials || {};

			    if (options.body) {
				    partials.body = options.body;
			    }

		        return hogan.compile(source, options).render(options, partials);
		    };
		}
	});
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});
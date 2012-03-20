
// Use express
var express = require('express')

// Instantiate our app/server
, app = module.exports = express.createServer();

// Now that we have an app, we can call our router
require('./routes/router');

// Configure the server
app.configure(function () {
	app.set('views', __dirname + '/views');

	// Set '.hogan' as the default extension
	app.set('view engine', 'hogan');

	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(__dirname + '/public'));

	// Use the 'hoganAdapter' for rendering '.hogan' files
	app.register('hogan', require('./lib/hoganAdapter.js'));
});

app.configure('development', function () {
  app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
});

app.configure('production', function () {
  app.use(express.errorHandler());
});
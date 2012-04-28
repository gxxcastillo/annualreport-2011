// Use express
var express = require('express')

	, fs = require('fs')

	, requirejs = require('requirejs')

    // Instantiate our app/server
    , app = module.exports = express.createServer()

	, logFile;


// General server configuration
app.configure(function () {
	app.set('basedir', __dirname);
	app.set('views', __dirname + '/views');

	// Set '.hogan' as the default extension
	app.set('view engine', 'hogan');

	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.favicon());

	// Use the 'hoganAdapter' for rendering '.hogan' files
	app.register('hogan', require('./lib/hoganAdapter.js'));
});


// Instatiate the routes (must be done after express.favicon() to avoid routing conflicts)
require('./routes/router');


app.configure('development', function () {
	console.log('** Development **');

	app.use(express.static(__dirname + '/public'));

	logFile = fs.createWriteStream('/var/log/express/annualreport.log', {flags: 'a'});
	app.use(express.logger({stream: logFile}));
	app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
});


app.configure('production', function () {
	console.log('** Production **');

	// Use minified static files
	app.use(express.static(__dirname + '/public_build'));

	logFile = fs.createWriteStream('/var/log/express/annualreport.log', {flags: 'a'});
	app.use(express.logger({stream: logFile}));
    app.use(express.errorHandler());
});


app.listen(80);
console.log('annualreport app started');
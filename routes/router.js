/**
 * The router
 *
 * Some helpful resources:
 * http://dailyjs.com/2012/01/26/effective-node-modules/
 * http://stackoverflow.com/questions/8428212/nodejs-expressjs-app-structure
 * http://stackoverflow.com/questions/6059246/how-to-include-route-handlers-in-multiple-files-in-express
 *
 */

var app = require('../app');

// Explicit routing
app.get('/', require('./main'));
app.get('/:section', require('./section'));




/*
This is cool, but I think I prefer making the routes explicit...I think...

module.exports = function(app){
    fs.readdirSync(__dirname).forEach(function(file) {
        if (file == 'index.js') {
	        return;
        }

        var name = file.substr(0, file.indexOf('.'));
        require('./' + name)(app);
    });
}

*/


/*
I prefer being able to split everything up into modules, even the routes

exports.section = function (req, res) {
	res.render('index', {title: 'dataviz'});
};

exports.rawSection = function (req, res) {
	// return json object representation of this view, broken up into "blocks".
	// Rendering will then iterate over each block.  (no frame)

	var viewData = sections[req.params.section];

	if (viewData) {
		viewData.success = true;
	} else {
		viewData = {};
		viewData.success = false;
	}

	// does this need to be converted to JSON?
	res.send(viewData);
}
*/
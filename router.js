/**
 * The router
 *
 * Some helpful resources:
 * http://dailyjs.com/2012/01/26/effective-node-modules/
 * http://stackoverflow.com/questions/8428212/nodejs-expressjs-app-structure
 * http://stackoverflow.com/questions/6059246/how-to-include-route-handlers-in-multiple-files-in-express
 *
 */

module.exports = function (app) {
	// Explicit routing
	app.get('/', require('./routes/index'));
	app.get('/:section', require('./routes/section'));
};
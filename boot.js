/**
 * Module dependencies.
 */

var fs = require('fs');

module.exports = function(app){
    var dir = __dirname + '/routes';
    // grab a list of our route files
    fs.readdirSync(dir).forEach(function(file){
        var justName = file.substr(0, file.indexOf('.'));
        require(dir + '/' + justName)(app);
    });
};
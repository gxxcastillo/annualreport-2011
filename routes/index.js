var NavProvider = require('./nav-provider.js').NavProvider;
var navProvider = new NavProvider();

module.exports =  function (req, res) {
    navProvider.findAll(function(error, navData){
        res.render('index', navData);
     });

};

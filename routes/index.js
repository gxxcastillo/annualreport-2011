var LayoutProvider = require('./layout-provider.js')

// Create an instance of LayoutProvider, use the default data
, layout = new LayoutProvider('defaultLayout');


module.exports =  function (req, res) {
    var layoutData = layout.getLayoutData();

	res.render('index', layoutData);
};
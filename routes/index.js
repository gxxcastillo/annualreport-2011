var LayoutProvider = require('./layout-provider.js')
, layout = new LayoutProvider('defaultLayout');

module.exports =  function (req, res) {
    var layoutData = layout.getLayoutData();

	res.render('index', layoutData);
};
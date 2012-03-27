var LayoutProvider = require('./layout-provider.js')
, SectionProvider = require('./section-provider.js')

// Create an instance of LayoutProvider, use the default data
, layoutProvider = new LayoutProvider('defaultLayout')

// Create an instance of the sectionProvider
, sectionProvider = new SectionProvider();


module.exports =  function (req, res) {
    var layoutData = layoutProvider.getLayoutData()
	, sectionList = sectionProvider.getList();

	// Identify the last element
	sectionList[0].first = true;
	layoutData.sectionList = sectionList;

	res.render('index', layoutData);
};
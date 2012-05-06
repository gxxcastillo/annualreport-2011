var LayoutProvider = require('../providers/layout-provider.js')
, SectionProvider = require('../providers/section-provider.js');


module.exports =  function (req, res) {
    // Create an instance of LayoutProvider, use the default data
    var layoutProvider = new LayoutProvider('defaultLayout')

    // Create an instance of the sectionProvider
    , sectionProvider = new SectionProvider()

    , layoutData = layoutProvider.getLayoutData()

    , sectionList = sectionProvider.getList();

    // Identify the first element
    sectionList[0].first = true;
    layoutData.sectionList = sectionList;

	if (process.env.NODE_ENV == 'production') {
		layoutData.fbShareUrl = 'http://www.facebook.com/dialog/feed?app_id=372116016173485&link=http://annualreport.kiva.org&redirect_uri=http://annualreport.kiva.org';
	} else {
		layoutData.fbShareUrl = 'http://www.facebook.com/dialog/feed?app_id=348783781832034&link=http://annualreport-vm.kiva.org&redirect_uri=http://annualreport-vm.kiva.org';
	}

    res.render('index', layoutData);
}

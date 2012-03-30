
    var LayoutProvider = require('../providers/layout-provider.js')
   , SectionProvider = require('../providers/section-provider.js');


    module.exports =  function (req, res) {
        // Create an instance of LayoutProvider, use the default data
        var layoutProvider = new LayoutProvider('defaultLayout')

        // Create an instance of the sectionProvider
        , sectionProvider = new SectionProvider();

        var layoutData = layoutProvider.getLayoutData()
        , sectionList = sectionProvider.getList();

        // Identify the last element
        sectionList[0].first = true;
        layoutData.sectionList = sectionList;

        res.render('index', layoutData);
    }

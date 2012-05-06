var LayoutProvider = require('../providers/layout-provider.js')
, SectionProvider = require('../providers/section-provider.js')

// Create an instance of LayoutProvider, use the default data
, layoutProvider = new LayoutProvider('defaultLayout')

// Create an instance of the sectionProvider
, sectionProvider = new SectionProvider();


module.exports =  function (req, res) {
    var layoutData = layoutProvider.getLayoutData()
    , sectionList = sectionProvider.getList()
    , sectionName = req.params.section;

    if (sectionName) {

        // Identify the last element
        sectionList[0].first = true;
        layoutData.sectionList = sectionList;

	    if (process.env.NODE_ENV == 'production') {
		    layoutData.fbShareUrl = 'http://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fannualreport.kiva.org%3Futm_source%3Dfacebook.com%26utm_campaign%3Dfacebook-share%26utm_medium%3Dshare-button&t=Kiva%27s+2011+Annual+Report';
		} else {
			layoutData.fbShareUrl = 'http://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fannualreport.kiva.org%3Futm_source%3Dfacebook.com%26utm_campaign%3Dfacebook-share%26utm_medium%3Dshare-button&t=Kiva%27s+2011+Annual+Report';
		}

        if (req.query['raw'] == 1) {
            // return json object representation of this view, broken up into "blocks".
            // Rendering will then iterate over each block.  (no frame)

            res.send(sectionProvider.findById(sectionName));
	        return;
        } else {
            // @todo, this is temporary until we figure out how to serve the ":section" view from the server
            res.render('index', layoutData);
        }
    }

    res.render('index', layoutData);
};
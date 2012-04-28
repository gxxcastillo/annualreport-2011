require.config({
	paths: {
		// 3rd party dependancies
		'order': 'lib/order'                        // For manually specifying loading order.  http://requirejs.org/docs/api.html#order
		, 'text': 'lib/text'                        // For loading text files. http://requirejs.org/docs/api.html#text
		, 'jquery': 'lib/jquery'
		, 'underscore': 'lib/underscore'            // Functional library. http://documentcloud.github.com/underscore/
		, 'backbone': 'lib/backbone'                // MVC framework. http://documentcloud.github.com/backbone/
		, 'hogan': 'lib/hogan'                      // Templating engine. http://twitter.github.com/hogan.js/
		, 'hogan.template': 'lib/hogan/template'
		, 'hogan.compiler': 'lib/hogan/compiler'
		, 'jquery.isotope': 'lib/jquery.isotope'    // Dynamic positioning of elements. http://isotope.metafizzy.co
		, 'jquery.colorbox': 'lib/jquery.colorbox'  // Lightboxes. http://www.jacklmoore.com/colorbox
		, 'jquery.waypoints': 'lib/jquery.waypoints'// Trigger scrolling events. http://imakewebthings.com/jquery-waypoints/

		// The Annual Report App

		// Models
		, 'AppModel': 'models/AppModel'
		, 'SectionModel': 'models/SectionModel'
		, 'BlockModel': 'models/BlockModel'

		// Collections
		, 'SectionsCollection': 'collections/SectionsCollection'

		// Views
		, 'AppView': 'views/AppView'
		, 'SidebarView': 'views/SidebarView'
		, 'MainView': 'views/MainView'
		, 'SectionView': 'views/SectionView'
		, 'BlockView': 'views/BlockView'
	}
});

require(['order!jquery', 'underscore', 'backbone', 'dv', 'Router', 'AppModel', 'AppView', 'order!jquery.isotope', 'order!jquery.waypoints', 'order!jquery.colorbox']
, function ($, _, Backbone, dv, Router, AppModel, AppView) {

	var
	// Model
	appModel = new AppModel

	// View
	, appView = new AppView({model: appModel})

	// Controller
	, router = new Router({appModel: appModel, appView: appView});

	/*
	// For testing only
	window.dvTesting = {
		annualReport: annualReport
		, router: router
		, layoutView: layoutView
	};
	*/
});
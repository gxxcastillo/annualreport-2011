require.config({
    baseUrl: '/js'
	, paths: {
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
		, 'AnnualReport': 'models/AnnualReport'
		, 'Section': 'models/Section'
		, 'Block': 'models/Block'
		, 'NavItem': 'models/NavItem'

		// Collections
		, 'Sections': 'collections/Sections'

		// Views
		, 'LayoutView': 'views/LayoutView'
		, 'SidebarView': 'views/SidebarView'
		, 'MainView': 'views/MainView'
		, 'SectionView': 'views/SectionView'
		, 'BlockView': 'views/BlockView'
	}
});

require(['underscore', 'backbone', 'dv', 'Router', 'AnnualReport', 'LayoutView', 'order!jquery', 'order!jquery.isotope', 'order!jquery.waypoints', 'order!jquery.colorbox']
, function (_, Backbone, dv, Router, AnnualReport, LayoutView) {

	var
	// Model
	annualReport = new AnnualReport

	// View
	, layoutView = new LayoutView({model: annualReport})

	// Controller
	, router = new Router({annualReport: annualReport, layoutView: layoutView});

	/*
	// For testing only
	window.dvTesting = {
		annualReport: annualReport
		, router: router
		, layoutView: layoutView
	};
	*/
});
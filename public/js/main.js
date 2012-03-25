require.config({
    baseUrl: '/js'
	, paths: {
		'order': 'lib/order'
		, 'text': 'lib/text'
		, 'jquery': 'lib/jquery'
		, 'underscore': 'lib/underscore'
		, 'backbone': 'lib/backbone'
		, 'hogan.template': 'lib/hogan/template'
		, 'hogan.compiler': 'lib/hogan/compiler'
		, 'hogan': 'lib/hogan'
		, 'jquery.isotope': 'lib/jquery.isotope'
		, 'jquery.masonry': 'lib/jquery.masonry'
		, 'jquery.colorbox': 'lib/jquery.colorbox'
		, 'jquery.infinitescroll': 'lib/jquery.infinitescroll'
		, 'jquery.waypoints': 'lib/jquery.waypoints'
		, 'AnnualReport': 'models/AnnualReport'
		, 'Section': 'models/Section'
		, 'Block': 'models/Block'
		, 'NavItem': 'models/NavItem'
		, 'NavList': 'collections/NavList'
		, 'Sections': 'collections/Sections'
		, 'LayoutView': 'views/LayoutView'
		, 'SidebarView': 'views/SidebarView'
		, 'MainView': 'views/MainView'
		, 'SectionView': 'views/SectionView'
		, 'BlockView': 'views/BlockView'
	}
});

require(['dv', 'Router', 'AnnualReport', 'LayoutView', 'order!jquery', 'order!jquery.isotope', 'order!jquery.waypoints', 'order!jquery.colorbox']
, function (dv, Router, AnnualReport, LayoutView) {

	var report2011 = new AnnualReport
	, router = new Router({sections: report2011.sections})
	, layoutView = new LayoutView({report2011: report2011});


	// @todo Here for testing
	window.dvTesting = {
		report2011: report2011
		, router: router
		, layoutView: layoutView
	};
});
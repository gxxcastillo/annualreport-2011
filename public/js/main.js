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

require(['dv', 'router', 'LayoutView', 'jquery', 'underscore', 'backbone', 'hogan', 'jquery.isotope', 'jquery.waypoints', 'jquery.colorbox']
, function (dv, Router, LayoutView) {

	$.extend(dv, {
		// Instantiate the router and expose it via 'dv'
		router: new Router()
	});

	new LayoutView();
});
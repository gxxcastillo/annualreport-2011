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
		, 'layoutView': 'views/layoutView'
		, 'sidebarView': 'views/sidebarView'
		, 'mainView': 'views/mainView'
		, 'sectionView': 'views/sectionView'
		, 'blockView': 'views/blockView'
	}
});

require(['dv', 'router', 'layoutView', 'jquery', 'underscore', 'backbone', 'hogan', 'jquery.isotope', 'jquery.waypoints', 'jquery.colorbox']
, function (dv, Router, layoutView) {

	$.extend(dv, {
		// Instantiate the router and expose it via 'dv'
		router: new Router()
	});

	new layoutView();
});
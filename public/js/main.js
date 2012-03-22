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
		, 'sidebarView': 'views/sidebarView'
		, 'mainView': 'views/mainView'
		, 'sectionView': 'views/sectionView'
		, 'blockView': 'views/blockView'
	}
});

require(['dv', 'mainView', 'sidebarView', 'router','jquery', 'underscore', 'backbone', 'hogan']
, function (dv, mainView, sidebarView, Router) {

	$.extend(dv, {
		// Instantiate the router and expose it via 'dv'
		router: new Router()
	});

	// Instantiate #sidebar
	new sidebarView();

	// Instantiate #main
	new mainView();
});
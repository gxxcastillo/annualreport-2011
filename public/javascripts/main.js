require.config({
    baseUrl: '/javascripts'
	, paths: {
		'order': 'lib/order'
		, 'jquery': 'lib/jquery'
		, 'underscore': 'lib/underscore'
		, 'backbone': 'lib/backbone'
		, 'handlebars': 'lib/handlebars'
		, 'jquery.isotope': 'lib/jquery.isotope'
		, 'jquery.infinitescroll': 'lib/jquery.infinitescroll'
		, 'sidebarView': 'views/sidebarView'
		, 'mainView': 'views/mainView'
		, 'sectionView': 'views/sectionView'
		, 'blockView': 'views/blockView'
	}
});

require(['dv', 'mainView', 'sidebarView', 'router','jquery', 'underscore', 'backbone', 'handlebars']
, function (dv, mainView, sidebarView, Router) {

	// Instantiate #sidebar
	new sidebarView();

	// Instantiate #main
	new mainView();

	$.extend(dv, {
		// Instantiate the router and expose it via 'dv'
		router: new Router()
	});
});
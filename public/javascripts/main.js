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

require(['dv', 'sidebarView', 'mainView', 'sectionView'], function (dv, sidebarView, mainView, sectionView) {
	// Instantiate #sidebar
	new sidebarView();

	// Instantiate #main
	new mainView();
});
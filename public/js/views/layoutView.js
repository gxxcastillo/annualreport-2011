define(['jquery', 'underscore', 'backbone', 'dv', 'sidebarView', 'mainView', 'jquery.waypoints'], function ($, _, Backbone, dv, sidebarView, mainView) {

	var $footer = $('footer')
	, waypointsOpts = {
		offset: '90%'
	};

	// Initialize Facebook
	//FB.init({appId: "YOUR_APP_ID", status: true, cookie: true});

	return Backbone.View.extend({
		el: 'body'

		, initialize: function () {
			// Instantiate #sidebar
			new sidebarView();

			// Instantiate #main
			new mainView();

			$footer.waypoint(function () {
				$footer.waypoint('remove');

				dv.router.getNextSection(function () {
					$footer.waypoint({offset: '90%'});
				});

			}, waypointsOpts);
		}
	});
});
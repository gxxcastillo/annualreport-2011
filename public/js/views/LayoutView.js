define(['jquery', 'underscore', 'backbone', 'dv', 'SidebarView', 'MainView'], function ($, _, Backbone, dv, SidebarView, MainView) {

	var $footer = $('footer')
	, waypointsOpts = {
		offset: '90%'
	};

	// Initialize Facebook
	//FB.init({appId: "YOUR_APP_ID", status: true, cookie: true});

	return Backbone.View.extend({
		el: 'body'

		, initialize: function () {
/*
			// Instantiate our SidebarView
			new SidebarView({navList: this.report2011.navList});

			// Instantiate our MainView
			new MainView({sections: this.report2011.sections});

			$footer.waypoint(function () {
				$footer.waypoint('remove');

				dv.router.getNextSection(function () {
					$footer.waypoint({offset: '90%'});
				});

			}, waypointsOpts);
*/
		}
	});
});
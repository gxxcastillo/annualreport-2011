// Hi there

define(['jquery', 'underscore', 'backbone', 'dv', 'AnnualReport', 'SidebarView', 'MainView', 'jquery.waypoints'], function ($, _, Backbone, dv, AnnualReport, SidebarView, MainView) {

	var $footer = $('footer')
	, waypointsOpts = {
		offset: '90%'
	};

	// Initialize Facebook
	//FB.init({appId: "YOUR_APP_ID", status: true, cookie: true});

	return Backbone.View.extend({
		el: 'body'

		, blah: function () {}

		, initialize: function () {
			var report2011 = new AnnualReport;

			// Instantiate our SidebarView
			new SidebarView({navList: report2011.navList});

			// Instantiate our MainView
			new MainView({sections: report2011.sections});

			$footer.waypoint(function () {
				$footer.waypoint('remove');

				dv.router.getNextSection(function () {
					$footer.waypoint({offset: '90%'});
				});

			}, waypointsOpts);
		}
	});
});
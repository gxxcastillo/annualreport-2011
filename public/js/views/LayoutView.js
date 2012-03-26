define(['jquery', 'underscore', 'backbone', 'dv', 'SidebarView', 'MainView']
, function ($, _, Backbone, dv, SidebarView, MainView) {

	var $footer = $('footer')
	, waypointsOpts = {
		offset: '90%'
	};

	// Initialize Facebook
	//FB.init({appId: "YOUR_APP_ID", status: true, cookie: true});

	return Backbone.View.extend({
		el: 'body'

		, initialize: function (options) {

			// Instantiate our SidebarView and save a reference to it
			this.sidebarView = new SidebarView({sections: options.report2011.sections});

			// Instantiate our MainView and save a reference to it
			this.mainView = new MainView({sections: options.report2011.sections});

			$footer.waypoint(function () {
				$footer.waypoint('remove');

				dv.router.getNextSection(function () {
					$footer.waypoint({offset: '90%'});
				});

			}, waypointsOpts);

		}
	});
});
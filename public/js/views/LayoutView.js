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

			// Set styling specific to dynamicRendering (i.e. using jquery.isotope for rendiner)
			if (!options.annualReport.renderAll) {
				this.$el.addClass('dynamicRender');
			}

			// Instantiate our SidebarView and save a reference to it
			this.sidebarView = new SidebarView({sections: options.annualReport.sections});

			// Instantiate our MainView and save a reference to it
			this.mainView = new MainView({annualReport: options.annualReport});
/* @todo
			// Infinite Scroll
			$footer.waypoint(function () {
				// Remove the binding
				$footer.waypoint('remove');

				options.annualReport.sections.setNextActive();

				// Now add it back
				$footer.waypoint({offset: '90%'});
			}, waypointsOpts);
*/

		}
	});
});
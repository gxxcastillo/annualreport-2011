define(['jquery', 'underscore', 'backbone', 'dv', 'SidebarView', 'MainView']
, function ($, _, Backbone, dv, SidebarView, MainView) {

	var $footer = $('footer')
	, waypointsOpts = {
		offset: '80%'
	};

	// @todo Initialize Facebook
	//FB.init({appId: "YOUR_APP_ID", status: true, cookie: true});

	return Backbone.View.extend({
		el: 'body'

		, initialize: function (options) {
			var annualReport = this.model;

			// Set styling specific to dynamicRendering (i.e. using jquery.isotope for rendering)
			if (!annualReport.get('renderAll')) {
				this.$el.addClass('dynamicRender');
			}

			// Instantiate our SidebarView and save a reference to it
			this.sidebarView = new SidebarView({collection: annualReport.get('sections')});

			// Instantiate our MainView and save a reference to it
			this.mainView = new MainView({model: annualReport});

			// Infinite Scroll
			$footer.waypoint(function () {
				// @todo disable for now
				return;

				// Remove the binding
				$footer.waypoint('remove');

				annualReport.get('sections').setNextActive('waypoint');

				// Now add it back
				$footer.waypoint(waypointsOpts);
			}, waypointsOpts);
		}
	});
});
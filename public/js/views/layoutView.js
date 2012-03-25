define(['jquery', 'underscore', 'backbone', 'dv', 'SidebarModel', 'SidebarView', 'MainView', 'jquery.waypoints'], function ($, _, Backbone, dv, SidebarModel, SidebarView, MainView) {

	var $footer = $('footer')
	, waypointsOpts = {
		offset: '90%'
	};

	// Initialize Facebook
	//FB.init({appId: "YOUR_APP_ID", status: true, cookie: true});

	return Backbone.View.extend({
		el: 'body'

		/**
		 * Getter & setter for the currentSection
		 */
		, activeSection: function (section) {
			if (section) {
				return currentSection = section;
			}

			return currentSection;
		}


		, renderedSections: function (section) {
			if (section) {
				if (_.indexOf(renderedSections, section) == -1) {
					renderedSections.push(section);
				}
			} else {
				return renderedSections;
			}
		}


		, isRendered: function (section) {
			return _.indexOf(renderedSections, section) > -1;
		}


		, initialize: function () {
			// Instantiate #sidebar
			new SidebarView({model: new SidebarModel});

			// Instantiate #main
			new MainView();

			$footer.waypoint(function () {
				$footer.waypoint('remove');

				dv.router.getNextSection(function () {
					$footer.waypoint({offset: '90%'});
				});

			}, waypointsOpts);
		}
	});
});
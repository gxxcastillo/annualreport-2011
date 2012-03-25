define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {

	/**
	 * Backbone.Router provides methods for routing client-side pages, and connecting them to actions and events.
	 * router.navigate does not support the history API's stateObject
	 */
	return Backbone.Router.extend({
		routes: {
			'': 'home'
			, '/': 'home'
			, ':section': 'goToSection'
			, '*action': 'defaultAction'
		}


		, goToSection: function (sectionName) {
			this.navigate(sectionName);
			// this.sections.fetch(sectionName);
			// this.sections.setActiveSection(sectionName);
		}


		, home: function () {
			this.goToSection('borrowers');
		}


		, defaultAction: function () {
			console.log('no route');
			this.home();
		}


		, initialize: function () {
			if (Modernizr.history) {
				Backbone.history.start({pushState: true /*, silent: true */});
			} else {
				// Wait for domReady (Non-history fallback relies on an iframe)
				$(Backbone.history.start({pushState: true /*, silent: true */}));
			}

		}
	});
});
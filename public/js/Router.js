// ---- The router is also the "Controller"  ----

define(['jquery', 'underscore', 'backbone', 'dv'], function ($, _, Backbone, dv) {

	/**
	 * Backbone.Router provides methods for routing client-side pages, and connecting them to actions and events.
	 * router.navigate does not support the history API's stateObject
	 */
	return Backbone.Router.extend({

		// Set up our routes.
		routes: {
			'': 'home'
			, '/': 'home'
			, ':section': 'showSection'
			, '*action': 'defaultAction'
		}


		/**
		 * @todo add ability to get new sections from the server
		 *
		 * Tells the sections collection to update.
		 * (We use the sections collection for managing state)
		 *
		 * @params {String} sectionId
		 */
		, showSection: function (sectionId) {
			var section = this.sections.get(sectionId);

			// @todo, For some reason the initial page load does not trigger the "change:isActive" event
			// So, we have to manually render the sidebar the first go 'round.
			this.sidebarView.render(sectionId);

			if (section) {
				this.sections.setActive(sectionId);
			} else {
				console.log('showSection: failed getting section, ' + sectionId);
				this.defaultAction();
			}
		}


		, redirect: function (sectionId) {
			this.navigate(sectionId);
			this.showSection(sectionId);
		}


		, home: function () {
			this.redirect(this.defaultSection);
		}


		, defaultAction: function () {
			console.log('no route');
			this.home();
		}


		, initialize: function (options) {

			var routerObj = this

			// Store a local reference to the sections collection
			, sections = this.sections = options.report2011.sections

			// Store a local reference to the views that need updating
			, mainView  = this.mainView = options.layoutView.mainView
			, sidebarView = this.sidebarView = options.layoutView.sidebarView;

			// Set the default Section
			this.defaultSection = options.report2011.defaultSection;

			if (Modernizr.history) {
				Backbone.history.start({pushState: true /*, silent: true */});
			} else {
				// Wait for domReady (Non-history fallback relies on an iframe)
				$(Backbone.history.start({pushState: true /*, silent: true */}));
			}

			// Set up the various events
			sections.on('change:isActive', function (model, value, options) {

				// We only care about the element that is being set active
				if (value == true) {
					routerObj.navigate(model.id);
					sidebarView.render(model.id);
				}
			});

			//sections.on('add', this.handleSectionAdd);
		}
	});
});
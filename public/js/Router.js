// ---- The router is also the "Controller" for now ----
// @todo break some of this out into a Controller

define(['jquery', 'underscore', 'backbone', 'dv'], function ($, _, Backbone, dv) {
	// @todo %hack% in order to manually fire a "change:isActive" event on page load
	var initialPageLoad = true;

	var waypointTriggered = false;

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
			this.sections.setActiveById(sectionId);
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
			, sections = this.sections = options.annualReport.sections

			// Store a local reference to the views that need updating
			, mainView  = this.mainView = options.layoutView.mainView
			, sidebarView = this.sidebarView = options.layoutView.sidebarView;


			// Set the default Section
			this.defaultSection = options.annualReport.defaultSection;


			// Instantiate backbone's history "pollyfill"
			if (Modernizr.history) {
				Backbone.history.start({pushState: true /*, silent: true */});
			} else {
				// Wait for domReady (Non-history fallback relies on an iframe)
				$(Backbone.history.start({pushState: true /*, silent: true */}));
			}


			// Bind to the sections "isLoaded" event
			sections.on('change:isLoaded', function (sectionModel) {
				mainView.appendSection(sectionModel);

				if (!waypointTriggered) {
					mainView.scrollTo(sectionModel.id);
				}
			});


			// Bind to the section Model's "isActive" change event
			sections.on('change:isActive', function (sectionModel, value) {

				// We only care about the element that is being set active
				if (value == true) {
					// Change the url
					routerObj.navigate(sectionModel.id);

					// Update the sidebar
					sidebarView.update(sectionModel.id);

					if (sectionModel.get('isLoaded') && !waypointTriggered) {
						mainView.scrollTo(sectionModel.id);
					}
				}
			});


			setInterval(function() {
				waypointTriggered = false;
			}, 250);


			// Bind the waypoints
			$('#main > section .sectionTitleBlock').waypoint(function (event, direction) {
				var sectionId = event.target.parentNode.id;

				if (dv.navClickTriggered || dv.keydownTriggered) {
					return;
				}

				waypointTriggered = true;

				if (direction === 'down') {
					sections.setActiveById(sectionId);
				} else {
					sections.setActiveById(sections.prev(sections.get(sectionId)));
				}

			}, {offset: '50%'});


			// Bind the key events to allow for browsing via the keyboard
			$(document).keydown(function (e) {

				// Return if not up or down arrow keys
				if (_.indexOf([38, 40], e.keyCode) < 0) {
					return;
				}

				e.preventDefault();

				// @todo %HACK% Notifies the controller that this "setActive" is being triggered by a nav click
				dv.keydownTriggered = true;
				dv.navClickTriggered = true;

				// Get the next/prev tab
				if (e.keyCode == 38) {
					sections.setPrevActive();
				} else if (e.keyCode == 40) {
					sections.setNextActive();
				}

			});
		}
	});
});
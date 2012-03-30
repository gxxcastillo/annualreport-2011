/**
 * Backbone Router
 * http://documentcloud.github.com/backbone/#Router
 *
 * Does the role of Router as well as Controller.
 * In Backbone, the views are the "controllers".  Here, we are delegating the job of app controller to the router.
 *
 * @todo Find a better home for the app controller (Most of the code in the Router's initialize() method)
 *
 */

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
		 * Tells the sections collection to update.  In turn, the controller will set appropriate section as "active"
		 *
		 * @params {String} sectionId
		 */
		, showSection: function (sectionId) {
			this.sections.setActiveById(sectionId, 'route');
		}


		/**
		 * @params {String} sectionId
		 */
		, redirect: function (sectionId) {
			this.navigate(sectionId);
			this.showSection(sectionId);
		}


		/**
		 * Redirects to the "defaultSection"
		 */
		, home: function () {
			this.redirect(this.defaultSection);
		}


		/**
		 * Handles unrecognized paths
		 */
		, defaultAction: function () {
			console.log('no route');
			this.home();
		}


		, initialize: function (options) {

			var router = this

			// Store a local reference to the sections collection
			, sections = this.sections = options.annualReport.get('sections')

			// Store a local reference to the views that need updating
			, mainView  = this.mainView = options.layoutView.mainView
			, sidebarView = this.sidebarView = options.layoutView.sidebarView

			, enableWaypoints = true;


			// Set the default Section
			this.defaultSection = options.annualReport.get('defaultSection');


			// Bind to the sections "isLoaded" event, once loaded we can tell the view to append it.
			sections.on('change:isLoaded', function (sectionModel) {
				mainView.appendSection(sectionModel);
			});


			sections.on('change:isRendered', function (sectionModel, value) {
				var $sectionTitleBlocks = $('#main > section .sectionTitleBlock');

				// Remove any existing waypoints that are attached to the sectionTitles
//				$sectionTitleBlocks.waypoint('remove');

				// Bind new waypoints
				$sectionTitleBlocks.waypoint(function (event, direction) {
					return;

					var sectionId = event.target.parentNode.id;

					if (direction === 'down') {
						sections.setActiveById(sectionId, 'waypoint');
					} else {
						// If scrolling up, we want to activate the "previous" element instead
						sectionId = sections.prev(sections.get(sectionId));
						if (sectionId) {
							sections.setActiveById(sectionId, 'waypoint');
						}
					}

				}, {offset: '50%'});

			});


			// Bind to the section Model's "isActive" change event
			sections.on('change:isActive', function (sectionModel, value) {
				var lastAlteredBy = sectionModel.get('lastAlteredBy');

				// We only care about the element that is being set active
				if (value === true) {
					// Change the url
					router.navigate(sectionModel.id);

					// Update the sidebar
					sidebarView.update(sectionModel);

					// Scroll to the section (But only the section's already "rendered", otherwise we want to wait for the section to be rendered)
					// We don't want to scroll if the change was triggered by waypoints (the user is already scrolling)
					if (sectionModel.get('isRendered') && lastAlteredBy !== 'waypoint') {
						mainView.scrollTo(sectionModel.id);
					}
				}
			});


			// Bind the key events to allow for browsing via the keyboard
			$(document).keydown(function (e) {

				// Return if not up or down arrow keys
				if (_.indexOf([38, 40], e.keyCode) < 0) {
					return;
				}

				e.preventDefault();

				// Get the next/prev tab
				if (e.keyCode == 38) {
					sections.setPrevActive('keydown');
				} else if (e.keyCode == 40) {
					sections.setNextActive('keydown');
				}

			});

			// Instantiate backbone's routes + the history "pollyfill"
			// Since it sets the routes, it should be called last, after all the initialization has taken place
			// (Keep this in mind if ever moving this stuff into a separate Controller)
			if (Modernizr.history) {
				Backbone.history.start({pushState: true /*, silent: true */});
			} else {
				// Wait for domReady (Non-history fallback relies on an iframe)
				$(Backbone.history.start({pushState: true /*, silent: true */}));
			}
		}
	});
});
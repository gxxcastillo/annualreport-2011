// ---- The router is also the "Controller" for now ----

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
			// On page load, this.sections has yet to be set.
			if (! this.sections) {
				return;
			}

			var sectionModel = this.sections.get(sectionId)
			, hasBlocks = sectionModel.has('blocks');

			if (true) {
				this.sections.setActive(sectionId);

				// @todo %hack% WHY WONT THIS TRIGGER??
				var sec = this.sections;
				window.setTimeout(function () {
					sec.trigger('change:isActive', [sec.getActive(), true]);
				}, 700);

			} else {
				$.get(sectionId, {raw: 1}, function (result) {
					if (result.success) {
						sectionModel.set({blocks: result.blocks});
						this.sections.trigger('init:sectionsData', [sections]);
					}
				});

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
			, sections = this.sections = options.annualReport.sections

			// Store a local reference to the views that need updating
			, mainView  = this.mainView = options.layoutView.mainView
			, sidebarView = this.sidebarView = options.layoutView.sidebarView;

			// Set the default Section
			this.defaultSection = options.annualReport.defaultSection;

			if (Modernizr.history) {
				Backbone.history.start({pushState: true /*, silent: true */});
			} else {
				// Wait for domReady (Non-history fallback relies on an iframe)
				$(Backbone.history.start({pushState: true /*, silent: true */}));
			}


			/* No longer need this as we're loading the initial set of data (sectionsList) inline
			sections.on('init:sectionsList', function (sectionsCollection) {
				sidebarView.asyncInit({sections: sectionsCollection});
			});
			*/

			sections.on('init:sectionsData', function (annualReportModel) {
				mainView.asyncInit({annualReport: annualReportModel});
			});

			// Bind to the section Model's "block" change event
			sections.on('change:block', function (sectionModel, value) {
				mainView.render(sectionModel.id);
			});


			// Bind to the section Model's "isActive" change event
			sections.on('change:isActive', function (sectionModel, value) {

				// We only care about the element that is being set active
				if (value == true) {
					routerObj.navigate(sectionModel.id);

					sidebarView.render(sectionModel.id);

					if (!waypointTriggered) {
						mainView.scrollTo(sectionModel.id);
					}
				}
			});

			sections.on('add', function (sectionModel, options) {
				mainView.render(sectionModel.id);
			});

			if (! options.annualReport.renderAll) {
				// If we are rendering all sections on page load, this will never fire

				dv.on('render.sectionView', function (id) {
					sections.get(id).isRendered = true;
				});
			} else {
				// @todo - this is lame, we are just assuming they all rendered.
				// Since at this point the views all rendered, its too late to bind to any event they fire while rendering

				_.each(sections.models, function (section) {
					sections.get(section.id).isRendered = true;
				});
			}

			setInterval(function() {
				waypointTriggered = false;
			}, 250);

			// Bind the waypoints
			$('#main > section .sectionTitleBlock').waypoint(function (event, direction) {
				var id = event.target.parentNode.id;

				if (dv.navClickTriggered || dv.keydownTriggered) {
					return;
				}

				waypointTriggered = true;

				if (direction === 'down') {
					sections.setActive(id);
				} else {
					sections.setActive(sections.prev(sections.get(id)));
				}

			}, {offset: '50%'});



			// Bind the key events to allow for browsing via the keyboard
			$(document).keydown(function (e) {
				var goTo;

				// Return if not up or down arrow keys
				if (_.indexOf([38, 40], e.keyCode) < 0) {
					return;
				}

				e.preventDefault();

				// @todo %HACK% Notifies the controller that this "setActive" is being triggered by a nav click
				dv.keydownTriggered = true;

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
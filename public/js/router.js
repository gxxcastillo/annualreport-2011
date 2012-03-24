define(['jquery', 'backbone', 'dv'], function ($, Backbone, dv) {

	// Store the current section
	// @todo, make currentSection non-static
	var currentSection = ''

	// @todo, this is also set on the server side, should only be set in one spot
	// Purpose of this is to set a sequential "order"
	, sections = [
		'borrowers'
		, 'lenders'
		, 'partners'
		, 'site'
		, 'ecosystem'
		, 'stories'
		, 'press'
		, 'finances'
	]

	// @todo, like the sections array, this is a matter of state.  Where should we be saving this state?
	, renderedSections = [];


	/**
	 * Backbone.Router provides methods for routing client-side pages, and connecting them to actions and events.
	 * router.navigate does not support the history API's stateObject
	 */
	return Backbone.Router.extend({
		routes: {
			':section': 'showSection'
			, '*action': 'defaultAction'
		}


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


		/**
		 * The route for navigating to a section.
		 *
		 * @todo. pass param for scrolling?
		 */
		, showSection: function (section) {
			this.activeSection(section);
			this.getSection(section);
		}


		/**
		 * @todo this should probably go in some dv ajax module
		 * @todo what should this url look like?  What should it look like if requesting multiple sections?
		 *
		 * Does an ajax request for a section.
		 */
		, getSection: function (section) {
			// Check to see if this section has already been rendered
			// @todo - better checking if the section is being rendered
			// @todo - what if the we've requested the section and just haven't rendered it
			if (_.indexOf(renderedSections, section) > -1) {
				return;
			}

			$.getJSON('/' + section + '?raw=1', function (results) {
				// @todo not sure if this is the best way to pass the section name to view
				results.name = section;

				dv.publish('get.section.dv', results);
			});
		}


		/**
		 * Get the next section
		 *
		 */
		, getNextSection: function (callback) {
			var i = _.indexOf(sections, currentSection)
			, nextSection = sections[i+1];

			if (!nextSection) {
				return;
			}

			this.activeSection(nextSection);
			this.getSection(nextSection);

			// @todo, what parameters should I be passing into the callback?
			callback();
		}


		/**
		 * Get all sections up to the section provided
		 *
		 * @params {String} from
		 * @params {String} [to]
		 *
		 * @todo request an array of each element I am requesting
		 *
		 */
		, getSectionsUpFrom: function (from, to) {
			to = to || currentSection;

			var fromIndex = _.indexOf(sections, from)
			, toIndex = _.indexOf(sections, to)
			, sectionsToRequest;

			// @todo add some kind of messaging?
			if (fromIndex + toIndex < 0) {
				return;
			}

			sectionsToRequest = sections.splice(fromIndex, toIndex);

			if (!_.isArray(sectionsToRequest)) {
				return;
			}

			this.getSections(sectionsToRequest);

		}


		/**
		 * @todo can this be combined with getSectionsUpFrom
		 * Get all sections that come up after the section provided
		 *
		 * @params {String} to
		 * @params {String} [from]
		 */
		, getSectionsUpTo: function (to, from) {
			from = from || currentSection;

			var toIndex = _.indexOf(sections, to)
			, fromIndex = _.indexOf(sections, from)
			, sectionsToRequest;

			// @todo add some kind of messaging
			if (toIndex + fromIndex < 0) {
				return;
			}

			sectionsToRequest = sections.splice(toIndex, fromIndex);

			if (!_.isArray(sectionsToRequest)) {
				return;
			}

			this.getSections(sectionsToRequest);
		}


		, defaultAction: function () {
			console.log('no route');
			this.navigate('borrowers', {trigger: true});
		}


		, initialize: function () {
			// Wait for domReady, IE history fallback relies on an iframe.
			// @todo use Modernizr to detect history support, if has native history support, no need to wait for domready
			$(Backbone.history.start({pushState: true /*, silent: true */}));
		}
	});
});
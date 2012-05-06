define(['jquery', 'underscore', 'backbone', 'dv', 'SectionView']
, function ($, _ ,Backbone, dv, SectionView, undefined) {
	'use strict';

	return Backbone.View.extend({

		el: '#main'


		/**
		 *
		 * @params {Backbone.Model} sectionModel
		 */
		, appendSection: function (sectionModel) {

			// Create the new section view, pass it the model
			var newSection = new SectionView({model: sectionModel});

			// Append the new section
			this.$el.append(newSection.el);

			// If "animate" is enabled, use jquery.isotope
			if (this.animate) {
				this.$el.isotope('appended', newSection.$el);
			}

			// Update the model's "isRendered" state
			sectionModel.set('isRendered', true);
		}


		/**
		 * @todo Not sure that the distinction between render and appendSection is the right one.  They seem like they should be the same call
		 *
		 * Renders any sections that are already there on page load.
		 * Any sections that are added afterwards calls appendSection() directly
		 */
		, render: function () {
			var viewObj = this
			, sectionsToRender;

			// @todo For now only if we are doing "renderAll"
			if (this.model.get('renderAll')) {
				// Make sure and only render sections that have been "loaded"
				sectionsToRender = this.sections.where({isLoaded: true});
				_.each(sectionsToRender.models, function (sectionModel) {
					viewObj.appendSection(sectionModel);
				});
			}
		}


		/**
		 *
		 * @params {String} sectionId
		 */
		, scrollTo: function (sectionId) {
			var mainView = this

			, model = this.model

			, scrollTop = this.scrollTopCache[sectionId];

			// Since sections have no height, 'isotope' is the most reliable way to find the 'scrollTop'
			// However, getting this value is slow and requires caching for smooth interaction
			if (scrollTop === undefined) {
				scrollTop = this.scrollTopCache[sectionId] = $('#' + sectionId + 'Section .sectionTitleBlock').data('isotope-item-position').y;
			}

			model.set('blockWaypointActivation', true);

			this.$htmlBody.stop().animate({scrollTop: scrollTop}, function() {

				// On initial load, scrolling past more than ~3 sections results in scrollTop being > than the height of the document
				// So, we wait, and assume the document will have reached the correct height on a second pass.
				window.setTimeout(function () {
					if (mainView.$document.scrollTop() < scrollTop) {
						mainView.$htmlBody.stop().animate({scrollTop: scrollTop});
					}

					model.set('blockWaypointActivation', false);
				}, 100);
			});
		}


		/**
		 *
		 * @params {Object} options
		 */
		, initialize: function () {
			var model = this.model

			// %hack% See http://isotope.metafizzy.co/docs/options.html#transformsenabled & http://isotope.metafizzy.co/docs/help.html#css-transforms
			, transformsEnabled = $.browser.mozilla ? false : undefined;

			this.sections = model.get('sections');
			this.renderAll = model.get('renderAll');
			this.animate = model.get('animate');

			this.scrollTopCache = [];

			// @todo, this is the best crossbrowser way of scrolling, however, it causes the scroll event to fire twice
			this.$htmlBody = $('html, body');
			this.$document = $(document);

			// Enable jquery.isotope?
			if (this.animate) {
				this.$el.isotope({

					// Only animate elements that match this selector
					itemSelector: '.block:not(.block .block, .hoverBlock)'

					// Needed to accurately get positioning of the blocks (http://isotope.metafizzy.co/docs/options.html#itempositiondataenabled)
					, itemPositionDataEnabled: true

					, transformsEnabled: transformsEnabled

					// We only want animations for browsers that support css transforms
					, animationEngine: 'css'

					, layoutMode: 'masonry'
					, masonry: {
					    columnWidth: 84
					}
				});
			}

			this.render();
		}
	});
});
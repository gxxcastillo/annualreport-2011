define(['jquery', 'underscore', 'backbone', 'dv', 'Sections', 'SectionView', 'AnnualReport']
, function ($, _ ,Backbone, dv, Sections, SectionView, AnnualReport, undefined) {


	return Backbone.View.extend({

		el: '#main'


		/**
		 *
		 * @params {Backbone.Model} sectionModel
		 */
		, appendSection: function (sectionModel) {
			var newSection = new SectionView({model: sectionModel});

			this.$el.append(newSection.el);

			// If "animate" is enabled, use jquery.isotope
			if (this.animate) {
				this.$el.isotope('appended', newSection.$el);
			}
		}


		/**
		 *
		 *
		 */
		, render: function () {
			var viewObj = this
			, sectionsToRender;

			// @todo For now only if we are doing "renderAll"
			if (this.renderAll) {
				// Make sure and only render sections that have been "loaded"
				sectionsToRender = this.sections.where({isLoaded: true});
			} else {
				return;
			}

			_.each(sectionsToRender.models, function (sectionModel) {
				viewObj.appendSection(sectionModel);
			});
		}


		/**
		 *
		 * @params {String} sectionId
		 */
		, scrollTo: function (sectionId) {
			// We have to use the top position of the sectionTitle
			// because section position values are not reliable when using jquery.isotope.
			$('html body').stop().animate({scrollTop: $('#' + sectionId + ' .sectionTitleBlock').offset().top - 10}, function () {
				dv.navClickTriggered = false;
				dv.keydownTriggered = false;
			});
		}


		/**
		 *
		 * @params {Object} options
		 */
		, initialize: function (options) {
			this.sections = options.annualReport.sections;
			this.renderAll = options.annualReport.renderAll;
			this.animate = options.annualReport.animate;

			// Enable jquery.masonry?
			if (this.animate) {
				this.$el.isotope({

					// Only animate elements that match this selector
					itemSelector: '.block:not(.block .block, .hoverBlock)'

					// We only want animations for browsers that support css transforms
					, animationEngine: 'css'

					, layoutMode: 'masonry'
					, masonry: {
					    columnWidth: 256
					  }
				});
			}

			this.render();
		}
	});
});
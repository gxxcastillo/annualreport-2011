define(['jquery', 'underscore', 'backbone', 'dv', 'Sections', 'SectionView', 'AnnualReport']
, function ($, _ ,Backbone, dv, Sections, SectionView, AnnualReport, undefined) {


	return Backbone.View.extend({

		el: '#main'


		, _deprecated_render: function (event, viewData) {
			// Create a new section
			var newSection = new SectionView(viewData);

			// Add the new section
			if (viewData && viewData.success) {
				this.$el.prepend( newSection.$el ).isotope('reloadItems');
			} else {
				this.$el.html('error: unable to retrieve data');
			}


			this.sectionView = newSection;
		}


		, appendSection: function (sectionData) {
			var newSection = new SectionView(sectionData.attributes);

			this.$el.append(newSection.el);

			// If "animate" is enabled, use jquery.isotope
			if (this.animate) {
				this.$el.isotope('appended', newSection.$el);
			}
		}


		, render: function (sectionId) {
			var viewObj = this
			, sectionsToRender

			sectionId = sectionId || this.sections.getActive();

			if (this.renderAll) {
				sectionsToRender = this.sections;
			} else {
				return;
			}

			_.each(sectionsToRender.models, function (sectionData, i) {
				this.appendSection(sectionData);
			});
		}


		, scrollTo: function (section) {
			// We have to use the top position of the sectionTitle
			// because section position values are not reliable when using jquery.isotope.
			$('html body').stop().animate({scrollTop: $('#' + section + ' .sectionTitleBlock').offset().top - 10}, function () {
				dv.navClickTriggered = false;
				dv.keydownTriggered = false;
			});
		}


		, asyncInit: function (options) {
			this.sections = options.annualReport.sections;
			this.renderAll = options.annualReport.renderAll;
			this.animate = options.annualReport.animate;

			// Enable jquery.masonry
			if (this.animate) {
				$main.isotope({
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
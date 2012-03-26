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


			this.$el.isotope(str, newSection.$el, $.proxy(function () {
				// @todo Now that the page has been appended, check if it filled the screen, if not append another section
				// careful, however, as the height of #main is never less than the height of the window (weird)
				if (this.$el.height() <= $(window).height()) {
					dv.router.getNextSection();
				}

			}, this));

			this.sectionView = newSection;
		}

		, render: function (sectionId) {
			var $el = this.$el
			, sectionsToRender
			, newSection;

			sectionId = sectionId || this.sections.getActive();

			if (this.renderAll) {
				sectionsToRender = this.sections;
			} else {
				console.log('Currently, only support "renderAll"');
				return;
			}

			_.each(sectionsToRender.models, function (sectionData, i) {
				newSection = new SectionView(sectionData.attributes);
				$el.append(newSection.el);
			});
		}


		, scrollToBottom: function () {
			$('html body').animate({scrollTop: this.$el.height()});

		}


		, handleSectionActive: function () {
			this.scrollToBottom();
		}


		, handleSectionAdd: function (event, viewData) {
			this.render(event, viewData);
		}


		, initialize: function (options) {
			var $main = this.$el;

			this.sections = options.annualReport.sections;
			this.renderAll = options.annualReport.renderAll;

			// Enable jquery.masonry
			if (!this.renderAll) {
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
define(['jquery', 'underscore', 'backbone', 'dv', 'Sections', 'SectionView', 'AnnualReport']
, function ($, _ ,Backbone, dv, Sections, SectionView, AnnualReport, undefined) {

	var count = 0;

	return Backbone.View.extend({

		el: '#main'


		, render: function (event, viewData) {
			// Create a new section
			var newSection = new SectionView(viewData);

var str;
if (count % 2) {
	str = 'appended';
} else {
	str = 'insert';
}

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

			count++;
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


		, initialize: function () {
			// @todo - we currently only render content that we request from the server
			// this.render();

			var $main = this.$el;

			this.sections.on('add', this.handleSectionAdd);
			this.sections.on('change:active', this.handleSectionActive);

			// Enable jquery.masonry
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
	});
});
define(['jquery', 'underscore', 'backbone', 'dv', 'sectionView']
, function ($, _ ,Backbone, dv, sectionView, undefined) {

	var height = 0;
	var count = 0;

	var didScroll = false;


	return Backbone.View.extend({

		el: '#main'


		, render: function (event, viewData) {
			// Create a new section
			var newSection = new sectionView(viewData);

var str;
if (count % 2) {
	str = 'appended';
} else {
	str = 'insert';
}


			// Add the new section
			if (!viewData || viewData.success) {
				this.$el.prepend( newSection.$el ).isotope('reloadItems');
			} else {
				this.$el.html('error: unable to retrieve data');
			}


			this.$el.isotope(str, newSection.$el, $.proxy(function () {
				// @todo Now that the page has been appended, check if it filled the screen, if not append another section
				// careful, however, as the height of #main is never less than the height of the window (weird)
				if (this.$el.height() <= $(window).height()) {
					dv.router.getSection('borrowers');
				}

			}, this));

			count++;
		}


		, scrollToBottom: function () {
			$('html body').animate({scrollTop: this.$el.height()});

		}


		, handleSectionGo: function () {
			this.scrollToBottom();
		}


		, handleNewSectionGet: function (event, viewData) {
			this.render(event, viewData);
		}


		, initialize: function () {
			// @todo - we currently only render content that we request from the server
			// this.render();

			var $main = this.$el;

//			dv.router.on('route:showSection', $.proxy(this.handleSectionGo, this));

			dv.subscribe('get.section.dv', $.proxy(this.handleNewSectionGet, this));

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

			$(window).scroll(function() {
			    didScroll = true;
			});

			setInterval(function() {
			    if (!didScroll) {
			        return;
			    }

				// Are we 300px from the bottom?
				if ( ($(document).height() - $(window).height()) - $(window).scrollTop() < 100 ) {
					dv.router.getSection('site');
				}
			}, 200);

		}
	});
});
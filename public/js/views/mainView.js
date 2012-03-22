define(['jquery', 'underscore', 'backbone', 'dv', 'sectionView']
, function ($, _ ,Backbone, dv, sectionView, undefined) {

	var height = 0;

	return Backbone.View.extend({

		el: '#main'


		/**
		 * Every block element is absolutely postioned.
		 * Therefore, we need to check & store the height ourselves.
		 *
		 * @params $el
		 * @returns {Number}
		 */
		, height: function ($el) {
			var newHeight;

			if ($el) {
				newHeight = $el.height() + $el.offset().top;

				if (newHeight > height) {
					height = newHeight;
				}
			}

			return height
		}


		, render: function (event, viewData) {
			// Create a new section
			var newSection = new sectionView(viewData);

			// Add the new section
			if (!viewData || viewData.success) {
				this.$el.append(newSection.$el);
			} else {
				this.$el.html('error: unable to retrieve data');
			}

			this.$el.isotope('appended', newSection.$el, function () {
				// @todo Now that the page has been appended, check if it filled the screen, if not append another section

			});
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


		, handleNewBlockRender: function ($event, $block) {
			// @todo, weird not sure why I seem to be getting a non-jQuery DOM element passed in
			this.height($($block));
		}


		, initialize: function () {
			// @todo - we currently only render content that we request from the server
			// this.render();

			var $main = this.$el;

			dv.router.on('route:showSection', $.proxy(this.handleSectionGo, this));

			dv.subscribe('get.section.dv', $.proxy(this.handleNewSectionGet, this));

			dv.subscribe('render.blockView.dv', $.proxy(this.handleNewBlockRender, this));

			// Enable jquery.masonry
			$main.isotope({
				itemSelector: '.block:not(.block .block, .hoverBlock)'

				// We only want animations for browsers that support css transforms
				, animationEngine: 'css'

				, layoutMode: 'fitRows'
			});

		}
	});
});
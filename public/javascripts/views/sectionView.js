define(['jquery', 'underscore', 'backbone', 'handlebars', 'dv', 'jquery.isotope', 'blockView']
, function ($, _ ,Backbone, Handlebars, dv ,undefined, blockView) {

	return Backbone.View.extend({

		tagName: 'section'


		, template: Handlebars.compile($('#sectionTemplate').html())


		/**
		 * Render the section
		 *
		 * @params {Object} viewData
		 */
		, render: function (viewData) {
			var $section = this.$el;

			// Build the section element
			$section.html(this.template({title: viewData.title}));

			// Append each block
			$.each(viewData.blocks, function (i, block) {
				var newBlock = new blockView(block);
				$section.append(newBlock.el);
			});
		}


		, initialize: function (viewData) {
			if (viewData) {
				this.render(viewData);
			}
		}
	});
});
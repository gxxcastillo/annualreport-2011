define(['jquery', 'underscore', 'backbone', 'hogan', 'dv', 'jquery.isotope', 'blockView']
, function ($, _ ,Backbone, hogan, dv ,undefined, blockView) {

	return Backbone.View.extend({

		tagName: 'section'


		, template: function (data) {
			if (! this.tpl) {
				this.tpl = hogan.compile($('#sectionTemplate').html())
			}

			return this.tpl.render(data);
		}


		/**
		 * Render the section
		 *
		 * @params {Object} viewData
		 */
		, render: function (viewData) {
			var $section = this.$el;

			// Build the section element
			$section.html(new blockView({
				name: 'sectionTitle'
				, title: viewData.title
				, cssClass: 'g2 h1'
			}).$el);

			// Append each block
			$.each(viewData.blocks, function (i, block) {
				var newBlock = new blockView(block);

				$section.append(newBlock.el);
			});

			dv.publish('render.blockView.dv', $section);
		}


		, initialize: function (viewData) {
			if (viewData) {
				this.render(viewData);
			}
		}
	});
});
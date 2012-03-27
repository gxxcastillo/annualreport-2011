define(['jquery', 'underscore', 'backbone', 'dv', 'hogan', 'BlockView']
, function ($, _ , Backbone, dv, Hogan, BlockView) {

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
			var l = $section
				.attr('id', viewData.id)

			$section.html(new BlockView({
					name: 'sectionTitle'
					, title: viewData.title
					, cssClass: 'g2 h1'
				}).$el);

			// Append each block
			_.each(viewData.blocks, function (block) {
				var newBlock = new BlockView(block);

				$section.append(newBlock.el);
			});

			dv.trigger('render.sectionView', [viewData.id]);
		}


		, initialize: function (viewData) {
			this.name = viewData.name;

			if (viewData) {
				this.render(viewData);
			}
		}
	});
});
define(['jquery', 'underscore', 'backbone', 'dv', 'hogan', 'BlockView']
, function ($, _ , Backbone, dv, Hogan, BlockView) {

	return Backbone.View.extend({

		tagName: 'section'


		/**
		 * Render the section
		 */
		, render: function () {
			var viewData = this.model.toJSON()
			, $section = this.$el
				.attr('id', viewData.id)
				.html(new BlockView({
					name: 'sectionTitle'
					, title: viewData.title
					, cssClass: 'g2 h1'
				}).$el);


			// Each section has multiple "blocks", append each one to the section's DOM
			_.each(viewData.blocks, function (block) {
				var newBlock = new BlockView(block);

				$section.append(newBlock.el);
			});

			// Update the model's state
			this.model.set('isRendered', true);
		}


		, initialize: function () {
			this.render();
		}
	});
});
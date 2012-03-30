define(['jquery', 'underscore', 'backbone', 'dv', 'hogan', 'BlockView']
, function ($, _ , Backbone, dv, Hogan, BlockView) {

	return Backbone.View.extend({

		tagName: 'section'


		/**
		 * Render the section
		 */
		, render: function () {
			var viewData = this.model.toJSON()
			, $section = this.$el.attr('id', viewData.id);

			// Each section has multiple "blocks", append each one to the section's DOM
			_.each(viewData.blocks, function (block) {

				// Pass the section title down to the block
				if (block.name == 'sectionTitle') {
					block.title = viewData.title
				}

				// Instantiate the new block view and append it to the section's DOM
				var newBlock = new BlockView(block);
				$section.append(newBlock.el);
			});
		}


		, initialize: function () {
			this.render();
		}
	});
});
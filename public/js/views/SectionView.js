/**
 * Backbone View
 * http://documentcloud.github.com/backbone/#View
 *
 * The section view builds the section DOM element.  The job of appending it falls to the "MainView"
 */
define(['jquery', 'underscore', 'backbone', 'dv', 'hogan', 'BlockView']
, function ($, _ , Backbone, dv, Hogan, BlockView) {

	return Backbone.View.extend({

		tagName: 'section'


		/**
		 * Render the section
		 */
		, render: function () {
			var viewData = this.model.toJSON()
			, $section = this.$el.attr('id', viewData.id)
			, blocks = [];

			// Each section has multiple "blocks"
			_.each(viewData.blocks, function (block) {
				// Instantiate the new block view and add it to our array of blocks
				blocks.push((new BlockView(block)).el);
			});

			// Append the array of blocks to the section's DOM
			$section.append(blocks);
		}


		, initialize: function () {
			this.render();
		}
	});
});
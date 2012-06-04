/**
 * Backbone View
 * http://documentcloud.github.com/backbone/#View
 *
 * The section view builds the section DOM element.  The job of appending it falls to the "MainView"
 */
define(['jquery', 'underscore', 'backbone', 'dv', 'hogan', 'BlockView']
, function ($, _ , Backbone, dv, Hogan, BlockView) {
	'use strict';

	return Backbone.View.extend({

		tagName: 'section'


		/**
		 * Render the section
		 *
		 * @todo This structure of this app falls apart when it comes down to the BlockViews & BlockModels. Need to rethink it.
		 */
		, render: function () {
			// @todo in addition, use the data attribute to store the section name instead of relying solely on the elements id attribute
			var $section = this.$el.attr('id', this.model.get('id') + 'Section')
			, blocks = [];

			_.each(this.model.get('blocks').models, function (blockModel, i) {
				// Instantiate the new block view and add it to our array of blocks
				blocks.push((new BlockView({model: blockModel})).el);
			});

			// Append the array of blocks to the section's DOM
			$section.append(blocks);
		}


		, initialize: function () {
			this.render();
		}
	});
});
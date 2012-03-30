/**
 * Backbone Model
 * http://documentcloud.github.com/backbone/#Model
 *
 * This is the model for each section.
 * It holds the data to be used in the view and it keeps track of its state
 */

define(['jquery', 'underscore', 'backbone', 'dv', 'Block'], function ($, _, Backbone, dv, Block) {

	return Backbone.Model.extend({

		defaults: {
			// We have loaded the complete model, including all blocks
			isLoaded: false

			// The model's view has been rendered and appended to the DOM
			, isRendered: false

			// The model is currently "active"
			, isActive: false

			// Keeps track of the last event to have altered the state of the model (used to avoid event collisions)
			, lastAlteredBy: ''
		}


		, initialize: function (sectionData) {
			var blocksArray = sectionData.blocks
			, blocks = [];

			// Build an array of all the blocks for this section
			_.each(blocksArray, function (blockData, index) {
				blocks[index] = new Block(blockData);
			});

			// Only initialze the "blocks" attribute if we have blocks to initialize it with
			if (blocks.length) {
				this.set('blocks', blocks);
			}

			// Automatically update the "isLoaded" attribute when blocks are set
			this.on('change:blocks', function (sectionModel, newBlocks) {
				if (!sectionModel.get('isLoaded') && newBlocks.length) {
					sectionModel.set('isLoaded', true);
				}
			});
		}
	});
});
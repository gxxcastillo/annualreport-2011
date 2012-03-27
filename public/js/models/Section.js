define(['jquery', 'underscore', 'backbone', 'dv', 'Block'], function ($, _, Backbone, dv, Block) {

	return Backbone.Model.extend({

		defaults: {
			isActive: false
			, isRendered: false
			, isLoaded: false
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
/**
 * Backbone Model
 * http://documentcloud.github.com/backbone/#Model
 *
 * This is the model for each section.
 * It holds the data to be used in the view and it keeps track of its state
 */

define(['jquery', 'underscore', 'backbone', 'dv', 'BlockModel'], function ($, _, Backbone, dv, BlockModel) {

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


		, isLoaded: function () {
			return this.get('isLoaded');
		}

		, isRendered: function () {
			return this.get('isRendered');
		}


		, isActive: function () {
			return this.get('isActive');
		}


		, initialize: function (sectionData) {
			var blocksArray = sectionData.blocks
			, blocks;

			// Only initialze the "blocks" attribute if we have blocks to initialize it with
			// (Currently, not being used.  Used only when we load all block data on initial page load instead of via an xhr request)
			// @todo should be using a collection instead of a plane js array
			if (blocksArray && blocksArray.length) {
				blocks = [];

				// Build an array of all the blocks for this section
				_.each(blocksArray, function (blockData, index) {
					blocks[index] = new BlockModel(blockData);
				});

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
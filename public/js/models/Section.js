define(['jquery', 'underscore', 'backbone', 'dv', 'Block'], function ($, _, Backbone, dv, Block) {

	return Backbone.Model.extend({

		defaults: {
			isActive: false
			, isRendered: false
		}

		, initialize: function (sectionData) {
			var blocksArray = sectionData.blocks
			, blocks = [];

			_.each(blocksArray, function (blockData, index) {
				blocks[index] = new Block(blockData);
			});
		}
	});
});
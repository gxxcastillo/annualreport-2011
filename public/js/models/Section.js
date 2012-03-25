require(['jquery', 'underscore', 'backbone', 'dv', 'Block'], function ($, _, Backbone, dv, Block) {

	return Backbone.Model.extend({

		defaults: {
			isActive: false
			, isRendered: false
		}

		, initialize: function (stuff) {
			var blocks = [];

			_.each(stuff, function () {
				blocks.push(new Block(stuff));
			});

			this.blocks = blocks;
		}
	});
});
/**
 * Backbone Collection
 * http://documentcloud.github.com/backbone/#Collection
 *
 */
define(['jquery', 'underscore', 'backbone', 'BlockModel']
, function ($, _, Backbone, BlockModel) {
	'use strict';

	return Backbone.Collection.extend({
		model: BlockModel
	});
});
require(['jquery', 'underscore', 'backbone', 'dv', 'Section'], function ($, _, Backbone, dv, Section) {
	return Backbone.Collection.extend({
		model: Section
	});
});
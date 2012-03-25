require(['jquery', 'underscore', 'backbone', 'dv', 'NavItem'], function ($, _, Backbone, dv, NavItem) {
	return Backbone.Collection.extend({
		model: NavItem
	});
});
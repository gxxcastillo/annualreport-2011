define(['backbone', 'NavItem'], function (Backbone, NavItem) {
	return Backbone.Collection.extend({
		model: NavItem
	});
});
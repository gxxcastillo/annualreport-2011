// @Todo @Delete

define(['backbone'], function (Backbone) {

	return Backbone.Model.extend({

		// @todo do we need this?
		defaults: {
			isActive: false
		}

		, initialize: function (data) {
			this.id = data.id;
			this.title = data.title;
			this.order = data.order;
		}
	})
});